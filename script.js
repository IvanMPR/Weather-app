import { apiCallReverseGeocoding } from './modules/current_location_script.js';
//prettier-ignore
import { renderDataUpper, renderDataMiddle, renderDataLower, windDirectionGadget } from './modules/render_data.js';
const input = document.querySelector('input');

const button = document.querySelector('.search-city-btn');
export const buttonCurrentLocation = document.querySelector(
  '.current-location-btn'
);
// const cityName = document.querySelector('.location');
// const stateName = document.querySelector('.state-name');
// const date = document.querySelector('.date');
// const time = document.querySelector('.time');
// const overall = document.querySelector('.dominant-weather-condition-output');
// const feelsLike = document.querySelector('.subjective-feeling-output');
// const humidity = document.querySelector('.humidity-output');
// const temperature = document.querySelector('.temperature');
// const tempHi = document.querySelector('.temp-max-output');
// const tempLow = document.querySelector('.temp-low-output');
// const descriptionLine = document.querySelector('.description');
// const visibility = document.querySelector('.visibility-output');
// /////////////////////////////////////////////////////////
// const weatherIcon = document.querySelector('.weather-icons');
const outputs = document.querySelectorAll('.output');
const blanks = document.querySelectorAll('.blank');
// const pressure = document.querySelector('.pressure-output');

// const dateString = document.querySelector('.date');
// const windDirDeg = document.querySelector('.wind-direction-degrees-output');
// const gust = document.querySelector('.wind-gusts-output');
// const windSpeed = document.querySelector('.wind-speed-output');

export const upperPart = document.querySelector('.upper-part');
export const middlePart = document.querySelector('.middle-part');
export const lowerPart = document.querySelector('.lower-part');
// //////////////////////////////////////////////////////

// Skeleton animation
export function showAnimation() {
  // outputs.forEach(el => el.classList.remove('skeleton'));
  outputs.forEach(el => {
    el.innerHTML = '';
    el.classList.add('skeleton');
  });
  // blanks.forEach(el => el.classList.remove('skeleton'));
  blanks.forEach(el => {
    el.innerHTML = '';
    el.classList.add('skeleton');
  });
}

// button listener
button.addEventListener('click', e => {
  e.preventDefault();
  // showAnimation();
  apiCallOpenWeather(input.value);
});
// location button listener
buttonCurrentLocation.addEventListener('click', e => {
  e.preventDefault();
  // showAnimation();
  apiCallReverseGeocoding();
});
// /////////////////////////////////////////////////////////////////////////
export const apiCallOpenWeather = async function (city) {
  try {
    showAnimation();
    const API_KEY = '25f76a4f0875a7268665e799574424e1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    const request = await fetch(url);
    console.log(request);
    const response = await request.json();
    // /////////////////////////////////////////////////////////
    renderDataUpper(response);
    renderDataMiddle(response);
    renderDataLower(response);
    const needle = document.getElementById('needle');
    windDirectionGadget(response.wind.deg, needle);
    // /////////////////////////////////////////////////////////
  } catch (err) {
    console.error(err);
  }
};
