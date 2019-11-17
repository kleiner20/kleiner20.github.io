//Discovered I could skip this with JQuery

// var nineInput = document.querySelector("#nineInput");
// var tenInput = document.querySelector("#tenInput");
// var elevenInput = document.querySelector("#elevenInput");
// var twelveInput = document.querySelector("#twelveInput");
// var oneInput = document.querySelector("#oneInput");
// var twoInput = document.querySelector("#twoInput");
// var threeInput = document.querySelector("#threeInput");
// var fourInput = document.querySelector("#fourInput");
// var fiveInput = document.querySelector("#fiveInput");
//      //Do I really need multiple save buttons?  
// var nineSave = document.querySelector("#nineBtn");
// var tenSave = document.querySelector("#tenBtn");

//Present Today's date
var today = moment().format( 'dddd, MMMM Do')
$('#displayDate').text(today);

//If statement to color code rows
var todaysTime = moment().format('LT');
var time = moment();



var nine = "hh:mm:ss";
nine = '09:00 am';

console.log(todaysTime);
console.log(nine);

 //Can't solve the comparing times to change background

//Need to set variable to time and compare in loop



$(window).on('load', function(){
loadSettings()
});

function loadSettings() {
  $('#nineInput').val(localStorage.nineActivity);
  $('#tenInput').val(localStorage.tenActivity);
  $('#elevenInput').val(localStorage.elevenActivity);
  $('#twelveInput').val(localStorage.twelveActivity);
  $('#oneInput').val(localStorage.oneActivity);
  $('#twoInput').val(localStorage.twoActivity);
  $('#threeInput').val(localStorage.threeActivity);
  $('#fourInput').val(localStorage.fourActivity);
  $('#fiveInput').val(localStorage.fiveActivity);
}


$(window).on('unload', function(){
  loadSettings();
});


$(document).on('click', 'button',function(){
  saveSettings();
function saveSettings() {
  localStorage.nineActivity = $('#nineInput').val();
  localStorage.tenActivity = $('#tenInput').val();
  localStorage.elevenActivity = $('#elevenInput').val();
  localStorage.twelveActivity = $('#twelveInput').val();
  localStorage.oneActivity = $('#oneInput').val();
  localStorage.twoActivity = $('#twoInput').val();
  localStorage.threeActivity = $('#threeInput').val();
  localStorage.fourActivity = $('#fourInput').val();
  localStorage.fiveActivity = $('#fiveInput').val();
}
  console.log(localStorage);

  localStorage.setItem("schedule", JSON.stringify(schedule));


    var fromLocal ="";
    fromLocal = JSON.parse(window.localStorage.getItem(schedule.nineActivity));
    console.log(fromLocal);
});
// Was attempting to create object
var schedule = {
  nineActivity: nineInput.value,
  tenActivity: tenInput.value,
  elevenActivity: elevenInput.value,
  twelveActivity: twelveInput.value,
  oneActivity: oneInput.value,
  twoActivity: twoInput.value,
  threeActivity: threeInput.value,
  fourActivity: fourInput.value,
  fiveActivity: fiveInput.value,
}




var timesArray = ['9:00','10:00','11:00','12:00']


  timesArray.forEach(function(element, i){

  var idString = element.split(":")[0].toString();

//this is where we would compare & manipulate time so we can set color attribute on this html string
//////////

function colorBasedOnTimeCompare (){

  var time = moment();

   if(time){
     
    //compare times
    //if number is blah blah then color is red

    return "red" ;
   }

   else {

     return "white"
   }


}

  var htmlRow = "<tr><td class= 'time-field' nowrap='nowrap' style = 'color: " + colorBasedOnTimeCompare()  + "'>" + "<label>" + element + "</label><input type='text' id='" +  idString + "Input'  name='nine' ><button id='" + idString + "Btn'>Save</button></td></tr>"

  console.log(htmlRow)


});














