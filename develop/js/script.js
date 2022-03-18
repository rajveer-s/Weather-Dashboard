// global variables 
//ps. variable line 6-38 could have been called upon inside the function and it would have looked a little better, but i just did it for convenience.
const apiKey = "437915cfc3abfad1c084c21077147df7";
const searchInput = document.querySelector('#userInput');
const submitBtn = document.querySelector('#submitBtn');
const searchHistoryDiv = document.querySelector('#searchHistory');
let cityName = document.querySelector('#cityName');
let updatedDate = document.querySelector('#weatherDate');
let weatherIcon = document.querySelector('#weatherIcon');
let weatherTemp = document.querySelector('#weatherTemp');
let weatherHumidity = document.querySelector('#weatherHumidity');
let weatherWind = document.querySelector('#weatherWind');
let weatherUv = document.querySelector('#weatherUv');
let day1Temp = document.querySelector('#day1Temp');
let day1Date = document.querySelector('#day1Date');
let day1Img = document.querySelector('#day1Img');
let day1Wind = document.querySelector('#day1Wind');
let day1Humidity = document.querySelector('#day1Humidity');
let day2Temp = document.querySelector('#day2Temp');
let day2Date = document.querySelector('#day2Date');
let day2Img = document.querySelector('#day2Img');
let day2Wind = document.querySelector('#day2Wind');
let day2Humidity = document.querySelector('#day2Humidity');
let day3Temp = document.querySelector('#day3Temp');
let day3Date = document.querySelector('#day3Date');
let day3Img = document.querySelector('#day3Img');
let day3Wind = document.querySelector('#day3Wind');
let day3Humidity = document.querySelector('#day3Humidity');
let day4Temp = document.querySelector('#day4Temp');
let day4Date = document.querySelector('#day4Date');
let day4Img = document.querySelector('#day4Img');
let day4Wind = document.querySelector('#day4Wind');
let day4Humidity = document.querySelector('#day4Humidity');
let day5Temp = document.querySelector('#day5Temp');
let day5Date = document.querySelector('#day5Date');
let day5Img = document.querySelector('#day5Img');
let day5Wind = document.querySelector('#day5Wind');
let day5Humidity = document.querySelector('#day5Humidity');
let cityResults = document.querySelector('#cityResults')
let currentCity = '';
let searchHistory = [];



// search input 
let searchBar = (e) => {
  e.preventDefault();

  currentCity = searchInput.value;

  if (currentCity === '' || currentCity === null) {
    console.log('City name is required')
    return false;
  }
  renderWeather(currentCity);
}

let saveCity = (newCity) => {
  let saveCities = JSON.parse(localStorage.getItem("results"));
  if (saveCities === null) {
    searchHistory = [];
  } else {
    searchHistory = saveCities;
  }
  searchHistory.push(newCity);

  localStorage.setItem('results', JSON.stringify(searchHistory))

  displayCity()
}

let displayCity = () => {
  // searchHistoryDiv = '';

  let cities = JSON.parse(localStorage.getItem('results'));
  if (!cities) cities = [];
  cityResults.textContent = "";
  for (var i = 0; i < cities.length; i++) {

    var buttonEl = document.createElement("button");
    buttonEl.textContent = cities[i];
    buttonEl.setAttribute("data-index", i);
    cityResults.appendChild(buttonEl);
    console.log(buttonEl);

  }
}

displayCity()




// fetching the weather data & displaying it in the DOM 
let renderWeather = (searchCity) => {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${apiKey}&units=imperial`;


  fetch(apiUrl).then(res => res.json())
    .then((data) => {
      let latCoord = data.coord.lat
      let lonCoord = data.coord.lon
      let displayName = data.name
      saveCity(currentCity)


      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latCoord}&lon=${lonCoord}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`)
        .then(response => response.json())
        .then((oneCallData) => {

          // displaying the info on the page 
          cityName.textContent = displayName;
          weatherIcon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
          updatedDate.textContent = `date: ${moment().format("MM/DD/YYYY")}`;
          weatherTemp.textContent = `Temp: ${oneCallData.current.temp} F`;
          weatherHumidity.textContent = `Humidity: ${oneCallData.current.humidity} %`;
          weatherWind.textContent = `Wind Speed: ${oneCallData.current.wind_speed} mph`;
          weatherUv.textContent = `UVI Index: ${oneCallData.current.uvi}`;
          weatherUv.removeAttribute("class");
          // changing the background color according to the UV Index numbers 
          if (oneCallData.current.uvi >= 0 && oneCallData.current.uvi < 3) {
            weatherUv.classList.add('uvBlue');
          } else if (oneCallData.current.uvi >= 4 && oneCallData.current.uvi < 8) {
            weatherUv.classList.add('uvYellow');
          } else if (oneCallData.current.uvi >= 8) {
            weatherUv.classList.add('uvRed');
          }

          // // 5 day forecast 
          // day 1
          day1Date.textContent = moment().add(1, 'day').format("MM/DD/YYYY");
          day1Img.src = "http://openweathermap.org/img/w/" + oneCallData.daily[0].weather[0].icon + ".png";
          day1Temp.textContent = `Temp: ${oneCallData.daily[0].temp.day} F`;
          day1Wind.textContent = `Wind Speed: ${oneCallData.daily[0].wind_speed} mph`;
          day1Humidity.textContent = `Humidity: ${oneCallData.daily[0].humidity} %`;

          // day 2
          day2Date.textContent = moment().add(2, 'day').format("MM/DD/YYYY");
          day2Img.src = "http://openweathermap.org/img/w/" + oneCallData.daily[1].weather[0].icon + ".png";
          day2Temp.textContent = `Temp: ${oneCallData.daily[1].temp.day} F`;
          day2Wind.textContent = `Wind Speed: ${oneCallData.daily[1].wind_speed} mph`;
          day2Humidity.textContent = `Humidity: ${oneCallData.daily[1].humidity} %`;

          // day 3
          day3Date.textContent = moment().add(3, 'day').format("MM/DD/YYYY");
          day3Img.src = "http://openweathermap.org/img/w/" + oneCallData.daily[2].weather[0].icon + ".png";
          day3Temp.textContent = `Temp: ${oneCallData.daily[2].temp.day} F`;
          day3Wind.textContent = `Wind Speed: ${oneCallData.daily[2].wind_speed} mph`;
          day3Humidity.textContent = `Humidity: ${oneCallData.daily[2].humidity} %`;

          // day 4
          day4Date.textContent = moment().add(4, 'day').format("MM/DD/YYYY");
          day4Img.src = "http://openweathermap.org/img/w/" + oneCallData.daily[3].weather[0].icon + ".png";
          day4Temp.textContent = `Temp: ${oneCallData.daily[3].temp.day} F`;
          day4Wind.textContent = `Wind Speed: ${oneCallData.daily[3].wind_speed} mph`;
          day4Humidity.textContent = `Humidity: ${oneCallData.daily[3].humidity} %`;

          // day 5
          day5Date.textContent = moment().add(5, 'day').format("MM/DD/YYYY");
          day5Img.src = "http://openweathermap.org/img/w/" + oneCallData.daily[4].weather[0].icon + ".png";
          day5Temp.textContent = `Temp: ${oneCallData.daily[4].temp.day} F`;
          day5Wind.textContent = `Wind Speed: ${oneCallData.daily[4].wind_speed} mph`;
          day5Humidity.textContent = `Humidity: ${oneCallData.daily[4].humidity} %`;



        })
    })
    .catch((error) => {
      console.error(error)
    })
}


submitBtn.addEventListener('click', searchBar);
