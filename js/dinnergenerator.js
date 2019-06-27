
(function (global) {

var kg = {};

var snackHtml = "/html/snacks.html";
var starterHtml = "/html/starters.html";
var maincourseHtml = "/html/main-courses.html";
var desertHtml = "/html/deserts.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


// Gives a random number between 0 and maxInteger
function randomInteger (minInteger, maxInteger) {

 var randomIndex = minInteger + Math.floor( Math.random() * maxInteger);
 return randomIndex;
};

//parses the recepie html for indvidual recepies and gets a random draw
kg.getrandomrecepie = function ( myHtml ){

    
    //find first and last closing tag of article which marks the recepies
    var firstIndex = myHtml.indexOf("<article>");
    var lastIndex = myHtml.lastIndexOf("</article>");
    
    //get substring of html containing only the recepies
    var recepieSubStr = myHtml.substring( firstIndex, lastIndex );

    //remove closing tag of article and split on articles
    recepieSubStr = recepieSubStr.replace("</article>", "");
    var recepieSnippets = recepieSubStr.split("<article>")

    //get random recepie
    var nRecepies = recepieSnippets.length;
    var randomDraw = randomInteger( 1, nRecepies-1 );
    var myRandomRecepieHtml = recepieSnippets[randomDraw];

    return myRandomRecepieHtml;
    
};

//function for loading snack recepies
kg.loadRandomSnackRecepie = function() {
  $ajaxUtils.sendGetRequest( snackHtml, function (snackHtml) {
    var myRandomRecepie = kg.getrandomrecepie( snackHtml );
    myRandomRecepie = "<h2>Slumpad snack</h2><hr>" + myRandomRecepie
    insertHtml("#snack-random-recepie", myRandomRecepie);
    }, false );
};

//function for loading starter recepies
kg.loadRandomStarterRecepie = function () {
  $ajaxUtils.sendGetRequest( starterHtml, function (starterHtml) {
    var myRandomRecepie = kg.getrandomrecepie( starterHtml );
    myRandomRecepie = "<h2>Slumpad förätt</h2><hr>" + myRandomRecepie
    insertHtml("#starter-random-recepie", myRandomRecepie);
    }, false );
};

//function for loading main-course recepies
kg.loadRandomMainCourseRecepie = function  () {
  $ajaxUtils.sendGetRequest( maincourseHtml, function (maincourseHtml) {
    var myRandomRecepie = kg.getrandomrecepie( maincourseHtml );
    myRandomRecepie = "<h2>Slumpad huvudrätt</h2><hr>" + myRandomRecepie
    insertHtml("#maincourse-random-recepie", myRandomRecepie);
    }, false );
};

//function for loading main-course recepies
kg.loadRandomDesertRecepie = function () {
  $ajaxUtils.sendGetRequest( desertHtml, function (desertHtml) {
    var myRandomRecepie = kg.getrandomrecepie( desertHtml );
    myRandomRecepie = "<h2>Slumpad desert</h2><hr>" + myRandomRecepie
    insertHtml("#desert-random-recepie", myRandomRecepie);
    }, false );
};


// Load the menu categories view
kg.loadRandomRecepies = function () {
  

  //get values of recepies to generate
  var snackChecked = document.getElementById("snacksCheck").checked;
  var starterChecked = document.getElementById("starterCheck").checked;
  var mainCourseChecked = document.getElementById("mainCourseCheck").checked;
  var desertChecked = document.getElementById("mainCourseCheck").checked;
  
  if ( snackChecked ) {
    kg.loadRandomSnackRecepie();
  };

  /*
  if ( starterChecked ) {
    loadRandomStarterRecepie();
  };

  if ( mainCourseChecked ) {
    loadRandomMainCourseRecepie();
  };

 if( desertChecked ) {
  loadRandomDesertRecepie();
 };
  */

};


kg.snackHtml = snackHtml

global.$kg = kg;

})(window);
