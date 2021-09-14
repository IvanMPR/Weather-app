import { lowerPart, middlePart, upperPart } from '../script.js';
// /////////////////////////////////////////////
export function animationUpper() {
  const html = `<p class="location blank blank-short skeleton"></p>
   <div class="blank blank-large-icon skeleton">
     
   </div>
   <p class="description output blank italic blank-medium skeleton"></p>
   <p class="temperature large blank blank-thick skeleton"></p>

   <p class="date blank blank-long skeleton"></p>
   <p class="time blank blank-short-time skeleton"></p>`;

  upperPart.innerHTML = '';
  upperPart.insertAdjacentHTML('beforeend', html);
}
export function animationMiddle() {
  const html = `<h2 class="box-title">Info</h2>
  <div class="data-div">
    <p class="dominant-weather-condition italic">overall weather:</p>
    <p
      class="dominant-weather-condition-output output output-blank-longer skeleton"
    ></p>
  </div>
  <div class="data-div">
    <p class="subjective-feeling italic">feels like:</p>
    <p class="subjective-feeling-output output output-blank-shorter skeleton"></p>
  </div>

  <div class="data-div">
    <p class="humidity italic">humidity:</p>
    <p class="humidity-output output output-blank-longer skeleton"></p>
  </div>
  <div class="data-div">
    <p class="pressure italic">pressure:</p>
    <p class="pressure-output output output-blank-longer skeleton"></p>
  </div>
  <div class="data-div">
    <p class="temp-max italic">temperature high:</p>
    <p class="temp-max-output output output-blank-shorter skeleton"></p>
  </div>
  <div class="data-div">
    <p class="temp-low italic">temperature low:</p>
    <p class="temp-low-output output output-blank-shorter skeleton"></p>
  </div>
  <div class="data-div">
    <p class="visibility italic">visibility:</p>
    <p class="visibility-output output output-blank-shorter skeleton"></p>
  </div>`;
  middlePart.innerHTML = '';
  middlePart.insertAdjacentHTML('beforeend', html);
}
export function animationLower() {
  const html = `<h2 class="box-title">Wind</h2>
  <div class="data-div">
    <p class="wind-direction-degrees italic">wind direction:</p>
    <p class="wind-direction-degrees-output output output-blank-longer skeleton">
      <span class="additional-info-output output"></span>
    </p>
  </div>
  <div class="data-div">
    <p class="wind-speed italic">wind speed:</p>
    <p class="wind-speed-output output output-blank-longer skeleton"></p>
  </div>
  <div class="data-div">
    <p class="wind-gusts italic">gusts:</p>
    <p class="wind-gusts-output output output-blank-shorter skeleton"></p>
  </div>`;
  lowerPart.innerHTML = '';
  lowerPart.insertAdjacentHTML('beforeend', html);
}
