

//array with tools

let tools=[
    "Phtoshop",
    "ilustrator",
    "Sketch",
    "marvel",
    "Figma",
    "Canvas business model"
];

let theme=[
  "a",
  "b",
  "c"
];


// choose a random element from the tools array
function getTools(){
  let randomTool = tools[Math.floor(Math.random()*tools.length)];
  return randomTool;
};

function getTheme(){
  let randomTheme = theme[Math.floor(Math.random()*theme.length)];
  return randomTheme;
};


var button = document.getElementById("buttontool");

button.onclick = function() {
  var resultTool = getTools();
  var resultTheme = getTheme();

  var placeholder = document.getElementById("placeholdertools");
  placeholder.innerHTML = resultTool;

  var placeholdertheme = document.getElementById("placeholdertheme");
  placeholdertheme.innerHTML = resultTheme;


};
