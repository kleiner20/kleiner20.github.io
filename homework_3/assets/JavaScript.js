
      var randomNumbers = [];
      var randomNumbers = [];
      var randomNumbers = [];
      var randomNumbers = [];


      var passWord = 0;
      var specialCharacter = false;
      var numericNumber;
      var lowerCase = false;
      var upperCase = false;
      var playButton = document.querySelector("#play");

      function gatherData() {  
      do {
      passWord = prompt("Please provide a password length between 8-128 characters");
      }
      while (passWord < 8 || passWord > 128);
       
        specialCharacter = confirm("Do you want a special character");
      
        numericNumber = confirm("Do you want a number?");
        
        lowerCase = confirm("Do you want a lower Case letter?");
        
        upperCase = confirm("Do you want a Upper Case letter?");
      }

      //Pressing 'Generate Password' is like pressing play
      playButton.addEventListener("click", gatherData);
      
    
      // We then loop through the favTVshows array...
      for (var j = 0; j < favTVshows.length; j++) {

        // ...and create alert messages listing out each show in our array.
        alert(favTVshows[j]);
      }

  
