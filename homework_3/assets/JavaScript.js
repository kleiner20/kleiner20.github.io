
    //   var rNumbersArray = [];
      var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
      var sCharacterChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      
      var pwHolder = [];


      var passWordLength = 0;
      var specialCharacter = false;
      var numericNumber;
      var lowerCase = false;
      var upperCase = false;
      var playButton = document.querySelector("#play");
      var result = '';

//Function 1: Gather Data
      function gatherData() {  
      do {
      passWordLength = prompt("Please provide a password length between 8-128 characters");
      }
      while (passWordLength < 8 || passWord > 128);
       
        specialCharacter = confirm("Do you want a special character");
      
        numericNumber = confirm("Do you want a number?");
        
        lowerCase = confirm("Do you want a lower Case letter?");
        
        upperCase = confirm("Do you want a Upper Case letter?");
      }
    // document.getElementById("myTextarea").value = passWordLength;
//  /*Tester*/     makeNum(passWordLength);
 //Function 2: Random Numbers
 function rnGenerator() {
    var pwHolder = document.getElementById("demo")
    pwHolder = Math.floor((Math.random() * 121) + 8);
 }
//Function 3 - Special Character
function makeid(Length) {
    // var result           = '';
    // var sCharacterChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = sCharacterChar.length;
    for ( var i = 0; i < length; i++ ) {
       resultingPassword += sCharacterChar.charAt(Math.floor(Math.random() * charactersLength));
       return result;   
    }
    // document.getElementById("myTextarea").value = result;
    // return result;
 
 //Function 4 - 
//  var html = [];
//  for (var i = 0, itemLen = items.length; i < itemLen; i++) {
//      pwHolder.push(items[i].pwHolder)
//  }
//  output.innerHTML = html.join('');

//Randoms to use 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// XXX will need to call on this function.
      function displayPassword() {  //last Function. Displays PW
        document.getElementById("myTextarea").value = result;
      }
//Button 1     
      //Pressing 'Generate Password' is like pressing play
      playButton.addEventListener("click", gatherData);
      
    
      // We then loop through the favTVshows array...
    //   for (var j = 0; j < passWord.length; j++) {

    //     // ...and create alert messages listing out each show in our array.
    // //     alert(favTVshows[j]);
    //   }
}