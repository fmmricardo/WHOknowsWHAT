jQuery(document).ready(function ($) {
  var publicSpreadsheetUrl = '1TAttZmIi2fyO91M8lOy8nYsNRqwX-W7l4hTQywYAapE',
      toolsArr = [],
      topicsArr = [],
      skillsArr = [],
      Button = document.getElementById("buttontool");

  //Open Rules
  jQuery(document).on("click",".OpenRules", function() {
    jQuery('.Overlay').css('display','flex');
  });

  //Close Rules
  jQuery(document).on("click",".Button--Close", function() {
    jQuery('.Overlay').css('display','none');
  });

  // Initialize Google spreadsheet content
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } );
  }

  // Process the information from the Spreadsheet
  function showInfo(data) {

    console.log(data);

    // get Tools
    for (var i = 0; i < data.length; i++) {
      if ( data[i].tools !== "" ) {
        toolsArr.push(data[i].tools);
      }
    }
    console.log(toolsArr);

    // get Topics
    for (var i = 0; i < data.length; i++) {
      if ( data[i].topics !== "" ) {
        topicsArr.push(data[i].topics);
      }
    }
    console.log(topicsArr);

    // get Skills
    for (var i = 0; i < data.length; i++) {
      if ( data[i].skills !== "" ) {
        skillsArr.push(data[i].skills);
      }
    }
    console.log(skillsArr);

  }

  // start init
  window.addEventListener('DOMContentLoaded', init());

  // get max and do random number for Tools
  function getTools(){
    let randomTool = toolsArr[Math.floor(Math.random()*toolsArr.length)];
    return randomTool;
  };

  function getTheme(){
    let randomTheme = topicsArr[Math.floor(Math.random()*topicsArr.length)];
    return randomTheme;
  };

  function getSkills(){
    let randomSkills = skillsArr[Math.floor(Math.random()*skillsArr.length)];
    return randomSkills;
  };

  Button.onclick = function() {
    var resultTool = getTools(),
        resultTheme = getTheme(),
        resultSkills = getSkills(),
        changeTool = document.getElementById("placeholdertools"),
        changeTheme = document.getElementById("placeholdertopics"),
        changeSkills = document.getElementById("placeholderskills");

    changeTool.innerHTML = resultTool;
    changeTheme.innerHTML = resultTheme;
    changeSkills.innerHTML = resultSkills;
  };
});
