jQuery(document).ready(function ($) {

  //Open Rules
  jQuery(document).on("click",".OpenRules", function() {
    jQuery('.Overlay').css('display','flex');
  });

  //Close Rules
  jQuery(document).on("click",".Button--Close", function() {
    jQuery('.Overlay').css('display','none');
  });
});

//array with tools
let tools=[
    "Photoshop",
    "Illustrator",
    "Sketch",
    "Marvel",
    "Figma",
    "Canvas Business Model",
    "Git"
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

var Button = document.getElementById("buttontool");

Button.onclick = function() {
  var resultTool = getTools();
  var resultTheme = getTheme();

  var placeholder = document.getElementById("placeholdertools");
  placeholder.innerHTML = resultTool;

  var placeholdertheme = document.getElementById("placeholdertheme");
  placeholdertheme.innerHTML = resultTheme;
};
