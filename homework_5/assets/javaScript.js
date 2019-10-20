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


//Present Today's date
var today = moment().format( 'dddd, MMMM Do');
$('#displayDate').text(today);

//If statement to color code rows
var todaysTime = moment().format('LT');

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


