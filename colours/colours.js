
var colourTable = { 
  "base": [
    d3.rgb(149,091,069).toString(),
    d3.rgb(255,068,018).toString(),	
    d3.rgb(047,139,233).toString(),	
    d3.rgb(118,204,066).toString(),	
    d3.rgb(162,128,228).toString(),
    d3.rgb(252,149,177).toString()
  ],
  "ct1": [
    d3.rgb(000,000,200).toString(),
    d3.rgb(000,050,200).toString(),	
    d3.rgb(000,100,200).toString(),	
    d3.rgb(000,150,200).toString(),	
    d3.rgb(000,200,200).toString(),
    d3.rgb(000,250,200).toString()
  ],
  "ct2": [
    d3.rgb(000,200,000).toString(),
    d3.rgb(050,200,000).toString(),	
    d3.rgb(100,200,000).toString(),	
    d3.rgb(150,200,000).toString(),	
    d3.rgb(200,200,000).toString(),
    d3.rgb(250,200,000).toString()
  ]                
};
  
function _C( colourTableName, index ) {
  var table = colourTable[colourTableName] ? colourTable[colourTableName] : colourTable["base"];
  return (index >= 0 && index < table.length) ? table[index] : table[0];
}

