
  /////////////////////////////////////////////////////
  //
  //  StateManager
  //
  /////////////////////////////////////////////////////

  function stateManager() {
      
      this.refreshChartFunction = null;
      this.changeChartFunction = null;
      this.previousStateData = null;

      this.History = window.History; // Note: We are using a capital H instead of a lower h
      this.isHistoryEnabled = History.enabled;
      
      if (!this.isHistoryEnabled) {
          console.log("Warning: History.js not supported!");
      }

      this.refresh = function(stateData) {
        
         var doChangeChart = !(this.previousStateData && (stateData.chartPath == this.previousStateData.chartPath));
         if (doChangeChart) {
           if (manager.changeChartFunction)
            manager.changeChartFunction(stateData);
         }
         else 
           if (manager.refreshChartFunction)
             manager.refreshChartFunction(stateData);
         
      }

      this.statechangeFired = false;
      var manager = this;
      this.History.Adapter.bind(window, 'statechange', function () {
          var state = manager.History.getState();
          console.log("History state changed: " + state.title);

          manager.refresh(state.data);
          manager.statechangeFired = true;
      });


      this.changeState = function(stateData, title, url) {
          var currentStateData = this.History.getState().data;
          var currentStateUrl = this.History.getState().url;
                    
          ////SPECIFIC
          var doReplace = (this.previousStateData == null) 
                  || (stateData.isZoom && currentStateData.isZoom && stateData.keyPath == currentStateData.keyPath);

          this.statechangeFired = false;
          if (doReplace)
              this.History.replaceState(stateData, title, url);
          else
              this.History.pushState(stateData, title, url);

          if (!this.statechangeFired) 
            this.refresh(stateData);
          
      }


  }

  /////////////////////////////////////////////////////
  //
  //  Intervals
  //
  /////////////////////////////////////////////////////
  
  function intervals() {
      this.ints = new Array();
      this.add = function (from, to) {
          var newInts = new Array();
          var reFrom = from;
          var reTo = to;
          for (var i = 0; i < this.ints.length; i++) {

              var iFrom = this.ints[i][0];
              var iTo = this.ints[i][1];
              if (iFrom > to || from > iTo)
                  newInts.push(this.ints[i]); //no overlapping
              else {
                  if (reFrom >= iFrom) //subtracting the
                      reFrom = Math.max(reFrom, iTo);
                  if (reTo <= iTo)
                      reTo = Math.min(reTo, iFrom);
 
                  from = Math.min(iFrom, from); //union of the two intervals
                  to = Math.max(iTo, to);
              }
          }
          newInts.push([from, to]);
          this.ints = newInts; 
          return reTo > reFrom ? [reFrom, reTo] : false;
      }
      return this;
  }
  function mapOfIntervals() {
    this.storage = new Object();
    this.add = function (key, from, to) {
        console.log("INTERVAL CHECK:" + key);
        if (!this.storage[key])
            this.storage[key] = new intervals();
        return this.storage[key].add(from, to);
    }
  }
  
  /////////////////////////////////////////////////////
  //
  //  KeyPath
  //
  /////////////////////////////////////////////////////
  
  function KeyPath (initialPath) {
      this.expandedKeys = new Array();
      this.cache = "";
      this.delimiter = "/";   
      this.getLastKey = function () {
          if (this.expandedKeys.length > 0)
              return this.expandedKeys[this.expandedKeys.length - 1];
          else
              return false;
      }
      this.equalsTo = function (other) {
          return this.cache == other.cache;
      }
      this.getPath = function () {
          return this.cache;
      }
      this.setPath = function(path) {
          this.cache = path ? path : "";
          this.expandedKeys = path ? path.split(this.delimiter) : new Array();
      }
      this.clone = function() {
          return new KeyPath(this.getPath());
      }
      this.removeLastKey = function() {
          if (this.expandedKeys.length > 0) {
            this.expandedKeys.pop();
            this.cache = this.expandedKeys.join(this.delimiter);
          }
          return this;
      }
      this.getLevelIndex = function() {
          return this.expandedKeys.length;
      } 
      this.setPath(initialPath);   
  }
  
  //////////////////////////////
  //
  // scaleAnimator
  //
  //////////////////////////////
  
  function scaleAnimator(  duration, setValue ) {  //setvalue: function(min,max,isFinal)
    this.duration = duration;
    this.startTime = false;
    this.setValue = setValue;
    this.reset = function() {
      this.startTime = false;
    }
    this.start = function(fromMin, fromMax, min,max) {
      this.fromMin = fromMin;
      this.fromMax = fromMax;
      this.toMin = min;
      this.toMax = max;
      this.startTime = new Date().getTime();
    }
    this.animate = function() {
      if (this.startTime === false)
        return false;
      var t = new Date().getTime() - this.startTime;
      if ( t > this.duration) {
        this.startTime = false;
        this.setValue (this.toMin,this.toMax, true);
      }
      else {
        var f = t / this.duration; //linear interpolation
        f = (1-f)*(1-f);
        this.setValue(this.toMin * (1-f) + this.fromMin * f ,this.toMax * (1-f) + this.fromMax * f, false);
      }
      return true;
    }
  }