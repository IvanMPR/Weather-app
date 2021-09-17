import { apiCallOpenWeather, upperPart } from '../script.js';
//prettier-ignore
import { animationUpper, animationMiddle, animationLower} from '../modules/animation.js';
//prettier-ignore
import {  renderError, renderMiddleOnError,  renderLowerOnError, timeout } from '../modules/errors.js';
// Get geolocation as Promise
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// /////////////////////////////////////////////////////////
export const apiCallReverseGeocoding = async function () {
  try {
    animationUpper();
    animationMiddle();
    animationLower();
    const getCoords = await getPosition();
    const { latitude, longitude } = getCoords.coords;

    const request = await Promise.race([
      fetch(
        `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${latitude}2&longitude=${longitude}&range=0`,
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
