var translations = {
  "czechrepublic" : "Csehország",
  "germany"	: "Németország",
  "hungary"	: "Magyarország",
  "austria"	:"Ausztria",
  "PL" : "Lengyelország",
  "slovakia" : "Szlovákia",

  "eu15" : "Európai Unió (15)",
  "v4" : "Visegrádi országok (4)"
}

function _T(text) {
  if (translations[text] === undefined)
    console.log ("Missing translation: "+text);
  return translations[text] ? translations[text] : text;
}