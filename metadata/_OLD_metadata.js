var pages = { 
  "uemp" : {
    "title" : "Munkanélküliség",
    "charts" : {
      "uemp1" : {   
        "title" : "Egyik mutató",
        "description" : [  //manually wrapped into more lines (see svg 1.1 spec)
          "A munkanélküliek aránya a munkában állókhoz és munkát keresőkhöz viszonyítva. Szezonális igazított adat.",
          "Magyarország a visegrádi országokkal és az Európai Unió első 15 országával összehasonlítva. Forrás: Eurostat. "
        ],

        // format
        "dateFormat" : "%Y-%m", // see https://github.com/mbostock/d3/wiki/Time-Formatting - d3.time.format
        "valueFormat" : ".1f", // see https://github.com/mbostock/d3/wiki/Formatting - d3.format

        // time and value extents
        "dateMin"  : "1990-01" ,   //formatted based on the "dateFormat" settings
        "dateMax"  : "2013-03" ,   //formatted based on the "dateFormat" settings
        "valueMin" : 4,
        "valueMax" : 16,

        // the initially visible time interval
        "dateFrom" : "2003-03" ,   //formatted based on the "dateFormat" settings
        "dateTo"   : "2013-03" ,   //formatted based on the "dateFormat" settings
        
        // formatting of axes
        "timeAxis" : {
          "tickCount": 8, //number of main ticks on the x axis
          "subdivide" : 0,   //number of "subticks" between main ticks
          "tickFormat": "dateAxisDefault"
        }, 
        "valueAxis" : {
          "tickCount": 5, //number of main ticks on the y axis
          "subdivide" : 1,   //number of "subticks" between main ticks
          "tickFormat": "valueAxisDefault",
          
          //adaptive y axis functions: 
          "maxValue" : "maxValueDefault",
          "minValue" : "minValueDefault"
        },            
        
        //legend
        "legend" : {
          "showBarChart" : true,         //barchart or simple legend
          "dateOfBarChart" : "2012-01" , //formatted based on the "dateFormat" settings
        }, 
        
        //tooltip
        "tooltipText" : "simpleTooltip" ,
        
        //shaded intervals
        "shadedIntervals" : [
          {
            "label" :    "shade1" ,     // label of the area
            "tooltip" :  "shade1" ,     // tooltip of the area
            "dateFrom" : "1990-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "1994-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ffdddd"      // color of the area
          },
          {
            "label" :    "shade2" ,     // label of the area
            "tooltip" :  "shade2" ,     // tooltip of the area
            "dateFrom" : "1998-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2002-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddffdd"      // color of the area
          },
          {
            "label" :    "shade3" ,     // label of the area
            "tooltip" :  "shade3" ,     // tooltip of the area
            "dateFrom" : "2010-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2014-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddddff"      // color of the area
          },    
        ], 
        
        //queries
        "queries" : [
          {    
            "isVisible" : "*",  //REFERENCE COUNTRY: always visible
            "tableName" : "countries",
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "filter"    : "`country` = 'hungary'", 
            "color"     : "#ff0000", 
            "thickness" : 4, 
            "onClick"   : 0         
          },
          {
            "isVisible" : "", //base level
            "tableName" : "regions", 
            "serieKey"  : "region", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "color"     : "colorTable0",
            "thickness" : 2, 
            "onClick"   : +1        
          },
          {
            "isVisible" : "v4", 
            "tableName" : "countries", 
            "serieKey"  : "country",    
            "dateKey"   : "date",        
            "valueKey"  : "uemp",       
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'v4'",    
            "color"     : "colorTable1",
            "thickness" : 2,        
            "onClick"   : 0           
          }, 
          {
            "isVisible" : "eu15", 
            "tableName" : "countries", 
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'eu15'",    
            "color"     : "colorTable2",
            "thickness" : 2,        
            "onClick"   : 0           
          } 
        ]
      },
      "uemp2" : {   
        "title" : "Másik mutató",
        "description" : [  //manually wrapped into more lines (see svg 1.1 spec)
          "2 A munkanélküliek aránya a munkában állókhoz és munkát keresőkhöz viszonyítva. Szezonális igazított adat.",
          "2 Magyarország a visegrádi országokkal és az Európai Unió első 15 országával összehasonlítva. Forrás: Eurostat. "
        ],

        // format
        "dateFormat" : "%Y-%m", // see https://github.com/mbostock/d3/wiki/Time-Formatting
        "valueFormat" : ".1f", // see https://github.com/mbostock/d3/wiki/Formatting

        // time and value extents
        "dateMin"  : "1990-01" ,   //formatted based on the "dateFormat" settings
        "dateMax"  : "2013-03" ,   //formatted based on the "dateFormat" settings
        "valueMin" : 4,
        "valueMax" : 16,

        // the initially visible time interval
        "dateFrom" : "2010-03" ,   //formatted based on the "dateFormat" settings
        "dateTo"   : "2013-03" ,   //formatted based on the "dateFormat" settings
        
        // formatting of axes
        "timeAxis" : {
          "tickCount": 8, //number of main ticks on the x axis
          "subdivide" : 0,   //number of "subticks" between main ticks
          "tickFormat": "dateAxisDefault"
        }, 
        "valueAxis" : {
          "tickCount": 5, //number of main ticks on the y axis
          "subdivide" : 1,   //number of "subticks" between main ticks
          "tickFormat": "valueAxisDefault",
          
           //adaptive y axis functions: 
          "maxValue" : "maxValueDefault",
          "minValue" : "minValueDefault"
        }, 
        
        //legend
        "legend" : {
          "showBarChart" : true,         //barchart or simple legend
          "dateOfBarChart" : "2012-01" , //formatted based on the "dateFormat" settings
        }, 
        
        //tooltip
        "tooltipText" : "simpleTooltip",
        
        //shaded intervals
        "shadedIntervals" : [
          {
            "label" :    "shade1" ,     // label of the area
            "tooltip" :  "shade1" ,     // tooltip of the area
            "dateFrom" : "1990-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "1994-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ffdddd"      // color of the area
          },
          {
            "label" :    "shade2" ,     // label of the area
            "tooltip" :  "shade2" ,     // tooltip of the area
            "dateFrom" : "1998-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2002-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddffdd"      // color of the area
          },
          {
            "label" :    "shade3" ,     // label of the area
            "tooltip" :  "shade3" ,     // tooltip of the area
            "dateFrom" : "2010-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2014-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddddff"      // color of the area
          },    
        ], 
        
        //queries
        "queries" : [
          {    
            "isVisible" : "*",  //REFERENCE COUNTRY: always visible
            "tableName" : "countries",
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "filter"    : "`country` = 'hungary'", 
            "color"     : "#ff0000", 
            "thickness" : 4, 
            "onClick"   : 0         
          },
          {
            "isVisible" : "", 
            "tableName" : "regions", 
            "serieKey"  : "region", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "color"     : "colorTable0", 
            "thickness" : 2, 
            "onClick"   : +1        
          },
          {
            "isVisible" : "v4", 
            "tableName" : "countries", 
            "serieKey"  : "country",    
            "dateKey"   : "date",        
            "valueKey"  : "uemp",       
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'v4'",    
            "color"     : "colorTable1",
            "thickness" : 2,        
            "onClick"   : 0           
          }, 
          {
            "isVisible" : "eu15", 
            "tableName" : "countries", 
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'eu15'",    
            "color"     : "colorTable2",
            "thickness" : 2,        
            "onClick"   : 0           
          } 
        ]
      }
    }
  },
  "gdp" : {
    "title" : "GDP",
    "charts" : {
      "gdp1" : {   
        "title" : "GDP egyik",
        "description" : [  //manually wrapped into more lines (see svg 1.1 spec)
          "1 gdp gdp",
          "1 gdp gdp"
        ],

        // format
        "dateFormat" : "%Y-%m", // see https://github.com/mbostock/d3/wiki/Time-Formatting
        "valueFormat" : ".1f", // see https://github.com/mbostock/d3/wiki/Formatting

        // time and value extents
        "dateMin"  : "1990-01" ,   //formatted based on the "dateFormat" settings
        "dateMax"  : "2013-03" ,   //formatted based on the "dateFormat" settings
        "valueMin" : 4,
        "valueMax" : 16,

        // the initially visible time interval
        "dateFrom" : "2003-03" ,   //formatted based on the "dateFormat" settings
        "dateTo"   : "2013-03" ,   //formatted based on the "dateFormat" settings
        
        // formatting of axes
        "timeAxis" : {
          "tickCount": 8, //number of main ticks on the x axis
          "subdivide" : 0,   //number of "subticks" between main ticks
          "tickFormat": "dateAxisDefault"
        }, 
        "valueAxis" : {
          "tickCount": 5, //number of main ticks on the y axis
          "subdivide" : 1,   //number of "subticks" between main ticks
          "tickFormat": "valueAxisDefault",
          
          //adaptive y axis functions: 
          "maxValue" : "maxValueDefault",
          "minValue" : "minValueDefault"
        }, 
        
        //legend
        "legend" : {
          "showBarChart" : true,         //barchart or simple legend
          "dateOfBarChart" : "2012-01" , //formatted based on the "dateFormat" settings
        }, 
        
        //tooltip
        "tooltipText" : "simpleTooltip",
        
        //shaded intervals
        "shadedIntervals" : [
          {
            "label" :    "shade1" ,     // label of the area
            "tooltip" :  "shade1" ,     // tooltip of the area
            "dateFrom" : "1990-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "1994-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ffdddd"      // color of the area
          },
          {
            "label" :    "shade2" ,     // label of the area
            "tooltip" :  "shade2" ,     // tooltip of the area
            "dateFrom" : "1998-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2002-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddffdd"      // color of the area
          },
          {
            "label" :    "shade3" ,     // label of the area
            "tooltip" :  "shade3" ,     // tooltip of the area
            "dateFrom" : "2010-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2014-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddddff"      // color of the area
          },    
        ], 
        
        //queries
        "queries" : [
          {    
            "isVisible" : "*",  //REFERENCE COUNTRY: always visible
            "tableName" : "countries",
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "filter"    : "`country` = 'hungary'", 
            "color"     : "#ff0000", 
            "thickness" : 4, 
            "onClick"   : 0         
          },
          {
            "isVisible" : "", 
            "tableName" : "regions", 
            "serieKey"  : "region", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "color"     : "colorTable0",
            "thickness" : 2, 
            "onClick"   : +1        
          },
          {
            "isVisible" : "v4", 
            "tableName" : "countries", 
            "serieKey"  : "country",    
            "dateKey"   : "date",        
            "valueKey"  : "uemp",       
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'v4'",    
            "color"     : "colorTable1",
            "thickness" : 2,        
            "onClick"   : 0           
          }, 
          {
            "isVisible" : "eu15", 
            "tableName" : "countries", 
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'eu15'",    
            "color"     : "colorTable2",
            "thickness" : 2,        
            "onClick"   : 0           
          } 
        ]
      },
      "gdp2": {   
        "title" : "GDP másik",
        "description" : [  //manually wrapped into more lines (see svg 1.1 spec)
          "2 GDPGDPGDP",
          "2 GDPGDPGDP",
          "2 GDPGDP "
        ],

        // format
        "dateFormat" : "%Y-%m", // see https://github.com/mbostock/d3/wiki/Time-Formatting
        "valueFormat" : ".1f", // see https://github.com/mbostock/d3/wiki/Formatting

        // time and value extents
        "dateMin"  : "1990-01" ,   //formatted based on the "dateFormat" settings
        "dateMax"  : "2013-03" ,   //formatted based on the "dateFormat" settings
        "valueMin" : 4,
        "valueMax" : 16,

        // the initially visible time interval
        "dateFrom" : "2010-03" ,   //formatted based on the "dateFormat" settings
        "dateTo"   : "2013-03" ,   //formatted based on the "dateFormat" settings
        
        // formatting of axes
        "timeAxis" : {
          "tickCount": 8, //number of main ticks on the x axis
          "subdivide" : 0,   //number of "subticks" between main ticks
          "tickFormat": "dateAxisDefault"
        }, 
        "valueAxis" : {
          "tickCount": 5, //number of main ticks on the y axis
          "subdivide" : 1,   //number of "subticks" between main ticks
          "tickFormat": "valueAxisDefault",
          
          //adaptive y axis functions: 
          "maxValue" : "maxValueDefault",
          "minValue" : "minValueDefault"
        }, 
        
        //legend
        "legend" : {
          "showBarChart" : true,         //barchart or simple legend
          "dateOfBarChart" : "2012-01" , //formatted based on the "dateFormat" settings
        }, 
        
        //tooltip
        "tooltipText" : "simpleTooltip",
        
        //shaded intervals
        "shadedIntervals" : [
          {
            "label" :    "shade1" ,     // label of the area
            "tooltip" :  "shade1" ,     // tooltip of the area
            "dateFrom" : "1990-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "1994-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ffdddd"      // color of the area
          },
          {
            "label" :    "shade2" ,     // label of the area
            "tooltip" :  "shade2" ,     // tooltip of the area
            "dateFrom" : "1998-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2002-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddffdd"      // color of the area
          },
          {
            "label" :    "shade3" ,     // label of the area
            "tooltip" :  "shade3" ,     // tooltip of the area
            "dateFrom" : "2010-04" , // formatted based on the "dateFormat" settings
            "dateTo" :   "2014-04" , // formatted based on the "dateFormat" settings
            "color" :    "#ddddff"      // color of the area
          },    
        ], 
        
        //queries
        "queries" : [
          {    
            "isVisible" : "*",
            "tableName" : "countries",
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "filter"    : "`country` = 'hungary'", 
            "color"     : "#ff0000", 
            "thickness" : 4, 
            "onClick"   : 0         
          },
          {
            "isVisible" : "", 
            "tableName" : "regions", 
            "serieKey"  : "region", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "color"     : "colorTable0", 
            "thickness" : 2, 
            "onClick"   : +1        
          },
          {
            "isVisible" : "v4", 
            "tableName" : "countries", 
            "serieKey"  : "country",    
            "dateKey"   : "date",        
            "valueKey"  : "uemp",       
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'v4'",    
            "color"     : "colorTable1",
            "thickness" : 2,        
            "onClick"   : 0           
          }, 
          {
            "isVisible" : "eu15", 
            "tableName" : "countries", 
            "serieKey"  : "country", 
            "dateKey"   : "date",     
            "valueKey"  : "uemp",  
            "join"      : "`countriesInRegions` ON `countriesInRegions`.`country` = `countries`.`country`", 
            "filter"    : "`region` = 'eu15'",    
            "color"     : "colorTable2",
            "thickness" : 2,        
            "onClick"   : 0           
          } 
        ]

      }
    }
  }
};