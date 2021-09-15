import { apiCallReverseGeocoding } from './modules/current_location_script.js';
//prettier-ignore
import { renderDataUpper, renderDataMiddle, renderDataLower, windDirectionGadget } from './modules/render_data.js';
//prettier-ignore
import { animationUpper, animationMiddle,  animationLower} from './modules/animation.js';
//prettier-ignore
import {  renderError,  renderLowerOnError, renderMiddleOnError, timeout, } from './modules/errors.js';

// ///////////////////////////////////////////////////////////
const input = document.querySelector('input');
const button = document.querySelector('.search-city-btn');
//prettier-ignore
export const buttonCurrentLocation = document.querySelector( '.current-location-btn');

// ///////////////////////////////////////////////////////////
export const upperPart = document.querySelector('.upper-part');
export const middlePart = document.querySelector('.middle-part');
export const lowerPart = document.querySelector('.lower-part');
// //////////////////////////////////////////////////////
// button listener
button.addEventListener('click', e => {
  e.preventDefault();
  apiCallOpenWeather(input.value);
});
// location button listener
buttonCurrentLocation.addEventListener('click', e => {
  e.preventDefault();
  apiCallReverseGeocoding();
});
// /////////////////////////////////////////////////////////////////////////
export const apiCallOpenWeather = async function (city) {
  try {
    animationUpper();
    animationMiddle();
    animationLower();
    const API_KEY = '25f76a4f0875a7268665e799574424e1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    const request = await Promise.race([fetch(url), timeout(5)]);
    if (!request.ok) {
      throw new Error('Country not found !');
    }
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
    renderError(upperPart, err);
    renderMiddleOnError();
    renderLowerOnError();
    console.error(err);
  }
};
