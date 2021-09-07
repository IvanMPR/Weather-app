'use-strict';

const API_KEY = '25f76a4f0875a7268665e799574424e1';
const input = document.querySelector('input');
// const loc = input.value;
const button = document.querySelector('button');
const cityName = document.querySelector('.location');
const stateName = document.querySelector('.state-name');
const date = document.querySelector('.date');
const overall = document.querySelector('.dominant-weather-condition-output');
const feelsLike = document.querySelector('.subjective-feeling-output');
const humidity = document.querySelector('.humidity-output');
const temperature = document.querySelector('.temperature');
const tempHi = document.querySelector('.temp-max-output');
const tempLow = document.querySelector('.temp-low-output');
const descriptionLine = document.querySelector('.description');
// /////////////////////////////////////////////////////////
const weatherIcon = document.querySelector('.weather-icons');

const pressure = document.querySelector('.pressure-output');

const sunriseString = document.querySelector('.sunrise');
const sunsetString = document.querySelector('.sunset');
const dateString = document.querySelector('.date');
const windDirDeg = document.querySelector('.wind-direction-degree');
const needle = document.getElementById('needle');
// const appDiv = document.querySelector('.app-wrapper');

// //////////////////////////////////////////////////////

// const link = `https://www.google.rs/maps/@${latitude},${longitude}`;
// console.log(link);

// const initialUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
// console.log("Hello");

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=${API_KEY}`;
const storage = {};
window.addEventListener('load', function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const { latitude } = pos.coords;
        storage.lt = latitude;
        const { longitude } = pos.coords;
        storage.ln = longitude;
        const initialUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        storage.initUrl = initialUrl;
        console.log(storage.initUrl);
        console.log(storage.lt);
        console.log(storage.ln);
      },
      function () {
        alert('Could not get browser location !');
      }
    );
  }
});
// console.log(currentLocation);
// const request = async function () {
//   try {
//   } catch (err) {
//     console.error(err.message);
//   }
// };
// request();
//  https://www.google.rs/maps/@${latitude},${longitude}
button.addEventListener('click', e => {
  e.preventDefault();
  test();
});

const test = async function () {
  try {
    const loc = input.value;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${storage.lt}&lon=${storage.ln}&units=metric&appid=${API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=${API_KEY}`;
    const request = await fetch(url);
    const response = await request.json();
    // /////////////////////////////////////////////////////////
    const values = {
      city: response.name,
      country: response.sys.country,
      icon: response.weather[0].icon,
      description: response.weather[0].description,
      temp: Math.round(response.main.temp),
      overallDesc: response.weather[0].main,
      windDeg: response.wind.deg,
      windSpeed: response.wind.speed,
      windGust: response.wind.gust,
      pressure: response.main.pressure,
      humidity: response.main.humidity,
      feelsLike: Math.round(response.main.feels_like),
      sunriseTimestamp: response.sys.sunrise,
      sunsetTimestamp: response.sys.sunset,
      dayOrNight() {
        return this.icon.slice(-1) === 'd' ? 'day' : 'night';
      },
      showDate() {
        const now = new Date();
        const dateStr = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          month: 'long',
          day: '2-digit',
        }).format(now);
        const getNumber = dateStr.slice(-2);
        return `${dateStr}${ordinalNumberSuffix(+getNumber)}`;
      },
    };

    console.log(values);
    console.log(values.dayOrNight());

    console.log(response);
    renderData(values);

    windDirectionGadget(values.windDeg, needle);
    console.log(translateWindDegreesToDirection(values.windDeg));
  } catch (err) {
    console.error(err);
  }
};

function renderData(obj) {
  cityName.textContent = `${obj.city}, (${obj.country})`;
  const iconUrl = `img/icons/${obj.icon}.svg`;
  weatherIcon.setAttribute('src', iconUrl);
  descriptionLine.textContent = obj.description;
  temperature.textContent = `${obj.temp}°C`;
  date.textContent = obj.showDate();
  overall.textContent = obj.overallDesc;
  pressure.textContent = obj.pressure;
  feelsLike.textContent = `${obj.feelsLike}°C`;
  humidity.textContent = `${obj.humidity}%`;
  windDirDeg.textContent = `wind direction: ${obj.windDeg}&deg;`;
}

function getTimeAndDateFromTimestamp(timestamp, element, dateElement = '') {
  const date = new Date(timestamp);
  console.log(date);
  // const date = new Date(timestamp * 1000);
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const day = parseDayName(date.getDay());
  const month = parseMonthName(date.getMonth());
  const datum = ordinalNumberSuffix(date.getDate());
  dateElement.textContent = `${day}, ${month} ${datum}`;
  element.textContent = `${hour}:${minute}`;
}

const ordinalNumberSuffix = function (date) {
  return `${
    date === 1 || date === 21 || date === 31
      ? 'st'
      : date === 2 || date === 22
      ? 'nd'
      : date === 3 || date === 23
      ? 'rd'
      : 'th'
  } `;
};
const windDirectionGadget = function (degree, el) {
  el.style.transform = `rotate(${degree}deg)`;
  el.style.transformOrigin = 'center';
};
const translateWindDegreesToDirection = function (degVal) {
  return degVal > 30 && degVal <= 60
    ? 'NE'
    : degVal > 60 && degVal <= 120
    ? 'E'
    : degVal > 120 && degVal <= 150
    ? 'SE'
    : degVal > 150 && degVal <= 210
    ? 'S'
    : degVal > 210 && degVal <= 240
    ? 'SW'
    : degVal > 240 && degVal <= 300
    ? 'W'
    : degVal > 300 && degVal <= 330
    ? 'NW'
    : 'N';
};
