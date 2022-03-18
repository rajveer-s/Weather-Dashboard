const apiKey = "437915cfc3abfad1c084c21077147df7";
const searchInput = document.querySelector('#userInput');
const submitBtn = document.querySelector('#submitBtn');
const searchHistory = document.querySelector('#searchHistory');
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



let searchBar = (e) => {
  e.preventDefault();

  let searchInputVal = searchInput.value;

  if (searchInputVal === '' || searchInputVal === null) {
      console.log('City name is required')
      return false;
  }
  renderWeather(searchInputVal);

  const recentStore = [];
  JSON.parse(localStorage.getItem("recentStore"))


  localStorage.setItem('recent', JSON.stringify(searchInputVal))
}

submitBtn.addEventListener('click', searchBar);
