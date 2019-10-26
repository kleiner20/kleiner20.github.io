var key = '5e1b8125a4ec0966dda40975e02231da';
var cities = ["Minneapolis", "Milwaukee"];

function drawWeather(data) {
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('humidity').innerHTML = data.weather[0].description; //fix
    document.getElementById('temp').innerHTML = celcius + '&deg;'; //done
    $('#temp').text(celcius + '&deg')
    document.getElementById('windSpeed').innerHTML = data.name;  //fix
    document.getElementById('uvIndex').innerHTML = data.name;  //fix
}

function gettingJSON(cityName){

    console.log("jquery loaded");
    $.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName+ "&appid=" + key,function(json){

        console.log("data:", JSON.stringify(json));
        var data = JSON.stringify(json);
        drawWeather(data);
    });
}

 // Function for displaying city data
 function renderButtons() {

    // Deleting the city buttons prior to adding new city buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    

    // Looping through the array of cities
    for (var i = 0; i < cities.length; i++) {

      // Then dynamicaly generating buttons for each city in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var cityButton = $("<button>");
      // Adding a class
      cityButton.addClass("citys");
      // Adding a data-attribute with a value of the city at index i
      cityButton.attr("data-name", cities[i]);
      // Providing the button's text with a value of the city at index i
      cityButton.text(cities[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(cityButton);
    }
  }
      // This function handles events where one button is clicked
      $("#add-cities").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var city = $("#city-input").val().trim();
        console.log(city);

        // The city from the textbox is then added to our array
        cities.push(city);

        // calling renderButtons which handles the processing of our cities array
        renderButtons();
        gettingJSON(city);
        
      });

      $("#buttons-view").on("click", 'button',function(event) {
            event.preventDefault();
            var newCitySearch = $(this).attr('data-name');
            gettingJSON(newCitySearch);

      });
      renderButtons();






      // Calling the renderButtons function at least once to display the initial list of cities
      
      
// // Initial array of citys
//         var citys = ["Minneapolis", "Milwaukee"];




// function weatherBalloon( cityID ) {

// 	$.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)  
// 	.then(function(resp) { return resp.json() }) // Convert data to json
// 	.then(function(data) {
// 		drawWeather(data); // Call drawWeather
// 	})
// 	.catch(function() {
//         // catch any errors
//     console.log()
// 	});
// }
// weatherBalloon( "Atlanta" );