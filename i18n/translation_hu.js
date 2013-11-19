var translations = {
  "CZ" : "Csehország",
  "DE"	: "Németország",
  "HU"	: "Magyarország",
  "AU"	:"Ausztria",
  "PL" : "Lengyelország",
  "SL" : "Szlovákia",

  "EU15" : "Európai Unió (15)",
  "V3" : "Visegrádi országok (3)"
}

function _T(text) {
  if (translations[text] === undefined)
    console.log ("Missing translation: "+text);
  return translations[text] ? translations[text] : text;
}