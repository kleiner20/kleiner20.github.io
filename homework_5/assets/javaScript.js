var nineInput = document.querySelector("#nineInput");
var tenInput = document.querySelector("#tenInput");
var elevenInput = document.querySelector("#elevenInput");
var twelveInput = document.querySelector("#twelveInput");
var oneInput = document.querySelector("#oneInput");
var twoInput = document.querySelector("#twoInput");
var threeInput = document.querySelector("#threeInput");
var fourInput = document.querySelector("#fourInput");
var fiveInput = document.querySelector("#fiveInput");
     //Do I really need multiple save buttons?  
var nineSave = document.querySelector("#nineBtn");
var tenSave = document.querySelector("#tenBtn");

//Present Today's date
var today = moment().format( 'dddd, MMMM Do')

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
$('#displayDate').text(today);


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
$(window).on('unload', function(){
  saveSettings();
  loadSettings();
});
// function loadSettings() {
//   $('#nineInput').val(localStorage.nineActivity);
//   $('#tenInput').val(localStorage.tenActivity);
//   $('#elevenInput').val(localStorage.elevenActivity);
//   $('#twelveInput').val(localStorage.twelveActivity);
//   $('#oneInput').val(localStorage.oneActivity);
//   $('#twoInput').val(localStorage.twoActivity);
//   $('#threeInput').val(localStorage.threeActivity);
//   $('#fourInput').val(localStorage.fourActivity);
//   $('#fiveInput').val(localStorage.fiveActivity);
// }





// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {

//     var fromLocal = JSON.parse(this.responseText);
//     document.getElementById("demo").innerHTML = myObj.name;
//   }
// };


$(document).on('click', 'button',function(){

// nineSave.addEventListener("click", function(event) {
//     event.preventDefault();

    

// tenSave.addEventListener("click", function(event) {
//     event.preventDefault();

    //eventDelegation
    // $(document).on('click', 'button',function(){
//do stuff  --OR--
// var value = $(this).value;

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


  // var ten = {
  //   tenActivity: nineInput.value,
  // };
  console.log(schedule);
  // console.log(ten);

    // set new submission
    localStorage.setItem("schedule", JSON.stringify(schedule));

   // localStorage.setItem("ten", JSON.stringify(ten));
   

   // window.location.reload(function(){ 
   //// getLastValues();        
//})


    // get most recent submission
   // function getLastValues(){
   // var lastValue = JSON.parse(localStorage.getItem("nine"));


    var fromLocal ="";
    fromLocal = JSON.parse(window.localStorage.getItem(schedule.nineActivity));
    console.log(fromLocal);
});




