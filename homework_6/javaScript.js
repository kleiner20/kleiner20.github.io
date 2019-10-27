// {/* <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script> */}

var key = '5e1b8125a4ec0966dda40975e02231da';
var cities = ["Minneapolis", "Milwaukee"];
var todaysDate = moment().format('ll');


// var randomFormat = "MM/DD/YYYY";

function drawWeather(data) {

  console.log(data);
  console.log(todaysDate);
  console.log("2nd Console ", data.main.temp);
  console.log(data.main.humidity);
  console.log(data.main.name);
  
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 

  var humidity = data.main.humidity;
  var windSpeed = data.wind.speed;
  var uvIndex = // need to get

  console.log(humidity);
  console.log(windSpeed);
  console.log(uvIndex);
  // console.log(celcius);

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
	
	// document.getElementById('humidity').innerHTML = data.weather[0].description; 
  //   document.getElementById('temp').innerHTML = celcius + '&deg;'; 
  $('#cityAndDate').text(data.name + " - " + todaysDate);

    $('#temp').text("Temperture: "+ celcius + " Celcius, " + fahrenheit + " Fahrenheit");
    $('#humidity').text("Humidity: "+ humidity + "%");

    $('#windSpeed').text("Wind Speed: " + windSpeed + " km/hr"); 
    // document.getElementById('uvIndex').innerHTML = data.name;  
// });
}
function gettingJSON(cityName){

    console.log(cityName);
    $.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName+ "&appid=" + key,function(json){
        console.log("first data");
       
        // var myData = JSON.parse(json);
        console.log("data:", JSON.stringify(json));
        console.log(json);
        var data = json;
        console.log(data.main.temp);
        // console.log(data);
        console.log("type of: " + typeof json);
        // console.log("type of: " + typeof data);


        
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
      // displayWeatherInfo();

// displayweatherInfo function re-renders the HTML to display the appropriate content
// function displayWeatherInfo() {

//   var newCitySearch = $(this).attr("data-name");
//   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newCitySearch+ "&appid=" + key

//   // Creating an AJAX call for the specific weather button being clicked
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {

//     // Creating a div to hold the weather
//     // var weatherDiv = $("<div class='weather'>");

//     // Storing the temperture data
//     var temperture = response.main.temp;

//     // Creating an element to have the temperture displayed
//     $("temp").text("Temperture: " + temperture);         //**leave off here

    // Displaying the temperture
    // weatherDiv.append(pOne);

//---------------------------------------------------

    // // Storing the release year
    // var released = response.Released;

    // // Creating an element to hold the release year
    // var pTwo = $("<p>").text("Released: " + released);

    // // Displaying the release year
    // weatherDiv.append(pTwo);

    // // Storing the plot
    // var plot = response.Plot;

    // // Creating an element to hold the plot
    // var pThree = $("<p>").text("Plot: " + plot);

    // // Appending the plot
    // weatherDiv.append(pThree);

    // // Retrieving the URL for the image
    // var imgURL = response.Poster;

    // // Creating an element to hold the image
    // var image = $("<img>").attr("src", imgURL);

    // // Appending the image
    // weatherDiv.append(image);

    // // Putting the entire weather above the previous weathers
    // $("#weathers-view").prepend(weatherDiv);
  // });

// }




      



