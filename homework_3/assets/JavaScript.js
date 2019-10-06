    //   var rNumbersArray = [];
    var upperCaseCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseCh = "abcdefghijklmnopqrstuvwxyz";
    var spCharacter = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numCharacter = "0123456789";
    
    var emptyString = "";

      var passWord = 0;
      var specialCharacter = false;
      var numericNumber;
      var lowerCase = false;
      var upperCase = false;
      var showText = document.getElementById("myTextarea");
      var playButton = document.querySelector("#play");
      var result = "oops";

     

      function gatherData() {  
      do {
      passWord = prompt("Please provide a password length between 8-128 characters");
      }
      while (passWord < 8 || passWord > 128);
       
        specialCharacter = confirm("Do you want a special character");
      
        numericNumber = confirm("Do you want a number?");
        
        lowerCase = confirm("Do you want a lower Case letter?");
        
        upperCase = confirm("Do you want a Upper Case letter?");

        myFunction();
      }


      
    
      //Functions start here
      function myFunction(passWord) {
      // var emptyString = "";
      // var lowerCase = "abcdefghijklmnopqrstuvwxyz";

      // while (emptyString.length < passWord){
      // if (emptyString.length < passWord && lowerCase === true) {

      // for (var i = 0, n = lowerCaseCh.length; i < passWord && lowerCase === true; ++i){
      // emptyString += lowerCaseCh[Math.floor(Math.random() * n)];
      // } 
      // for (var j = 0, o = upperCaseCh.length; j < passWord && upperCase === true; ++j){
      // emptyString += upperCaseCh[Math.floor(Math.random() * o)];
      // } 
      // for (var k = 0, p = spCharacter.length; k < passWord && specialCharacter === true; ++k){
      // emptyString += spCharacter[Math.floor(Math.random() * p)];
      // } 
      // for (var l = 0, q = numCharacter.length; l < passWord && numericNumber === true; ++l){
      // emptyString += numCharacter[Math.floor(Math.random() * q)];
      // } 
      // return emptyString;
          var length = passWord;
              charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
              retVal = "";
          for (var i = 0, n = charset.length; i < length; ++i) {
              retVal += charset.charAt(Math.floor(Math.random() * n));
          }
          return retVal;
      }
      showText.innerHTML = myFunction(passWord);


      // if (emptyString.length < passWord && upperCase === true) {

      // emptyString += upperCaseCh[Math.floor(Math.random() * upperCaseCh.length)];
      // }
      // if (emptyString.length < passWord && specialCharacterv === true) {
      // emptyString += spCharacter[Math.floor(Math.random() * spCharacter.length)];
      // }
      // if (emptyString.length < passWord && numericNumber === true) {
      // emptyString += numCharacter[Math.floor(Math.random() * numCharacter.length)];
      // }

//       function display(){
//       showText.innerHTML = emptyString;
// }
// console.log(emptyString);
      
      // function myFunction() {

      //   if pwHolder || passWord { 
      //   pwHolder = pwHolder + 
      //   }
      //   // var x = document.getElementById("demo")
      //   else 
      //   showText.innerHTML = Math.floor((Math.random() * 123) + 8);
      // }
      
      
      
      
    //   function makeid(length) {
    //     var result           = '';
    //     var characters       = 'abcdefghijklmnopqrstuvwxyz';
    //     var charactersLength = characters.length;
    //     for ( var i = 0; i < length; i++ ) {
    //        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     return result;
        
    //  }
    //  showText.textcontent = result;
          //Pressing 'Generate Password' is like pressing play
          playButton.addEventListener("click", gatherData);



    //  showText.innerHTML = result;  //Temp here.  In function. Displays Text.
    //  console.log(makeid(5));
      
      
      
      // We then loop through the favTVshows array...
      // for (var j = 0; j < favTVshows.length; j++) {

      //   // ...and create alert messages listing out each show in our array.
      //   alert(favTVshows[j]);
      // 
      