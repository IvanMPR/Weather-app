import { apiCallOpenWeather, upperPart } from '../script.js';
//prettier-ignore
import { animationUpper, animationMiddle, animationLower} from '../modules/animation.js';
//prettier-ignore
import {  renderError, renderMiddleOnError,  renderLowerOnError, timeout } from '../modules/errors.js';

// Getting browsers geolocation
window.addEventListener('load', function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const { latitude } = pos.coords;
        // Store browsers latitude
        storage.lat = latitude;
        const { longitude } = pos.coords;
        // Store browsers longitude
        storage.lon = longitude;
      },
      function () {
        alert('Could not get browser location !');
      }
    );
  }
});
// /////////////////////////////////////////////////////////
// Store browsers lat, lon
const storage = {};
// /////////////////////////////////////////////////////////
export const apiCallReverseGeocoding = async function () {
  try {
    animationUpper();
    animationMiddle();
    animationLower();
    const request = await Promise.race([
      fetch(
        `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${storage.lat}2&longitude=${storage.lon}&range=0`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'geocodeapi.p.rapidapi.com',
            'x-rapidapi-key':
              '667440b8bdmsha4bd6168888fe4dp18db5ejsn6b8b40686a77',
          },
        }
      ),
      timeout(5),
    ]);
    if (!request.ok) {
      throw new Error('Failed to retrieve current location !');
    }
    const response = await request.json();
    // Call to OpenWeatherMap API with reversed geocode location
    apiCallOpenWeather(response[0].City);
  } catch (err) {
    renderError(upperPart, err);
    renderMiddleOnError();
    renderLowerOnError();
  }
};
