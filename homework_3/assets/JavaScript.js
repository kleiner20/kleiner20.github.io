
      var randomNumbers = [];
      var randomNumbers = [];
      var randomNumbers = [];
      
      var passWord = [];


      var passWordLength = 0;
      var specialCharacter = false;
      var numericNumber;
      var lowerCase = false;
      var upperCase = false;
      var playButton = document.querySelector("#play");
      var resultingPassword = "Test One";

      function gatherData() {  //Function #1
      do {
      passWordLength = prompt("Please provide a password length between 8-128 characters");
      }
      while (passWordLength < 8 || passWord > 128);
       
        specialCharacter = confirm("Do you want a special character");
      
        numericNumber = confirm("Do you want a number?");
        
        lowerCase = confirm("Do you want a lower Case letter?");
        
        upperCase = confirm("Do you want a Upper Case letter?");
        displayPassword();   
    }



// XXX will need to call on this function.
      function displayPassword() {  //last Function. Displays PW
        document.getElementById("myTextarea").value = resultingPassword;
      }
 //Button 1     
      //Pressing 'Generate Password' is like pressing play
      playButton.addEventListener("click", gatherData);
      
    
      // We then loop through the favTVshows array...
      for (var j = 0; j < passWord.length; j++) {

        // ...and create alert messages listing out each show in our array.
        alert(favTVshows[j]);
      }

  
