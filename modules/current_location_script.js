import { apiCallOpenWeather, showAnimation } from '../script.js';
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
// Store browsers lat, lon
const storage = {};

export const apiCallReverseGeocoding = async function () {
  showAnimation();
  try {
    const request = await fetch(
      `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${storage.lat}2&longitude=${storage.lon}&range=0`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'geocodeapi.p.rapidapi.com',
          'x-rapidapi-key':
            '667440b8bdmsha4bd6168888fe4dp18db5ejsn6b8b40686a77',
        },
      }
    );

    const response = await request.json();
    // Call to OpenWeatherMap API with reversed geocode location
    apiCallOpenWeather(response[0].City);
  } catch (err) {
    console.error(err);
  }
};
