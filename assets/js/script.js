const cityInput = document.querySelector("#cityInput");
const searchEl = document.querySelector("#searchButton");
const clearEl = document.querySelector("#clear-history");
const nameEl = document.querySelector("#city-name");
const currentPicEl = document.querySelector("#current-pic");
const currentTempEl = document.querySelector("#temperature");
const currentHumidityEl = document.querySelector("#humidity");
const currentWindEl = document.querySelector("#wind-speed");
const currentUVEl = document.querySelector("#UV-index");
const historyEl = document.querySelector("#history");
var fivedayEl = document.querySelector("#fiveday-header");
var todayweatherEl = document.querySelector("#today-weather");
let searchHistory = JSON.parse(localStorage.getItem("#search")) || [];
const currentWeatherItemsEl = document.getElementById("current-weather-items")
const API_KEY = '5f649b9e6386b11e44b28b05ae7c92a5';
$(document).ready(function () {

    $(searchEl).click(function () {

        var city = $(cityInput).val();

        if (city != "") {

            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=" + API_KEY).then(data => {
                console.log(data)
                $("#cityInput").val("")
            });
        } else {
            $("#error").html("feild cannot be empty");
        }
    });
});



