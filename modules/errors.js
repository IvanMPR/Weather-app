import { lowerPart, middlePart } from '../script.js';

export function timeout(sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
}

export function renderError(element, err) {
  const markup = ` <div class="error-container">
    <p class="error-text">
      Ooops...Something went wrong !
    </p>
    <p class="error-message italic">
      ${err.message}
    </p>
    <p class="error-text">
      Please try again
    </p>
  </div>`;

  element.innerHTML = '';

  element.insertAdjacentHTML('beforeend', markup);
}

export function renderMiddleOnError() {
  const html = `<h2 class="box-title">Info</h2>
  <div class="data-div">
    <p class="dominant-weather-condition italic">overall weather:</p>
    <p
      class="dominant-weather-condition-output output output-blank-longer"
    ></p>
  </div>
  <div class="data-div">
    <p class="subjective-feeling italic">feels like:</p>
    <p class="subjective-feeling-output output output-blank-shorter"></p>
  </div>

  <div class="data-div">
    <p class="humidity italic">humidity:</p>
    <p class="humidity-output output output-blank-longer"></p>
  </div>
  <div class="data-div">
    <p class="pressure italic">pressure:</p>
    <p class="pressure-output output output-blank-longer"></p>
  </div>
  <div class="data-div">
    <p class="temp-max italic">temperature high:</p>
    <p class="temp-max-output output output-blank-shorter"></p>
  </div>
  <div class="data-div">
    <p class="temp-low italic">temperature low:</p>
    <p class="temp-low-output output output-blank-shorter"></p>
  </div>
  <div class="data-div">
    <p class="visibility italic">visibility:</p>
    <p class="visibility-output output output-blank-shorter"></p>
  </div>`;
  middlePart.innerHTML = '';
  middlePart.insertAdjacentHTML('beforeend', html);
}

export function renderLowerOnError() {
  const html = `<h2 class="box-title">Wind</h2>
  <div class="data-div">
    <p class="wind-direction-degrees italic">wind direction:</p>
    <p class="wind-direction-degrees-output output output-blank-longer">
      <span class="additional-info-output output"></span>
    </p>
  </div>
  <div class="data-div">
    <p class="wind-speed italic">wind speed:</p>
    <p class="wind-speed-output output output-blank-longer"></p>
  </div>
  <div class="data-div">
    <p class="wind-gusts italic">gusts:</p>
    <p class="wind-gusts-output output output-blank-shorter"></p>
  </div>`;
  lowerPart.innerHTML = '';
  lowerPart.insertAdjacentHTML('beforeend', html);
}
