import { upperPart, middlePart, lowerPart } from '../script.js';
// Render left(upper on small screen size) part data
export function renderDataUpper(obj) {
  const html = `<p class="location">${obj.name}, (${obj.sys.country})</p>
   <div class="icon-wrapper">
     <img
       src="img/icons/${obj.weather[0].icon}.svg"
       alt="icon"
       class="weather-icons"
     />
   </div>
   <p class="description output italic">${obj.weather[0].description}</p>
   <p class="temperature large">${Math.round(obj.main.temp)}&deg;C</p>
 
   <p class="date">${showDate()}</p>
   <p class="time">${showTime()}</p>`;
  upperPart.innerHTML = '';
  upperPart.insertAdjacentHTML('beforeend', html);
}
// Render middle part data
export function renderDataMiddle(obj) {
  const html = `<h2 class="box-title">Info</h2>
   <div class="data-div">
     <p class="dominant-weather-condition italic">overall weather:</p>
     <p class="dominant-weather-condition-output output">${
       obj.weather[0].main
     }</p>
   </div>
   <div class="data-div">
     <p class="subjective-feeling italic">feels like:</p>
     <p class="subjective-feeling-output output">${Math.round(
       obj.main.feels_like
     )} &deg;c</p>
   </div>
 
   <div class="data-div">
     <p class="humidity italic">humidity:</p>
     <p class="humidity-output output">${obj.main.humidity} %</p>
   </div>
   <div class="data-div">
     <p class="pressure italic">pressure:</p>
     <p class="pressure-output output">${obj.main.pressure} mb</p>
   </div>
   <div class="data-div">
     <p class="temp-max italic">temperature high:</p>
     <p class="temp-max-output output">${Math.round(
       obj.main.temp_max
     )} &deg;c</p>
   </div>
   <div class="data-div">
     <p class="temp-low italic">temperature low:</p>
     <p class="temp-low-output output">${Math.round(
       obj.main.temp_min
     )} &deg;c</p>
   </div>
   <div class="data-div">
     <p class="visibility italic">visibility:</p>
     <p class="visibility-output output">${
       obj.visibility % 1000 === 0
         ? obj.visibility / 1000
         : (obj.visibility / 1000).toFixed(2)
     } km</p>
   </div>`;
  middlePart.innerHTML = '';
  middlePart.insertAdjacentHTML('beforeend', html);
}
// Render right(lower on small screen size) part data.
// Huge because of SVG file
export function renderDataLower(obj) {
  const html = `<h2 class="box-title">Wind</h2>
   <div class="data-div">
     <p class="wind-direction-degrees italic">wind direction:</p>
     <p class="wind-direction-degrees-output output">
       ${
         obj.wind.deg
       }&deg;<span class="additional-info-output output">(${translateWindDegreesToDirection(
    obj.wind.deg
  )})</span>
     </p>
   </div>
   <div class="data-div">
     <p class="wind-speed italic">wind speed:</p>
     <p class="wind-speed-output output">${Math.round(
       obj.wind.speed * 3.6
     ).toFixed(1)} km/h</p>
   </div>
   <div class="data-div">
     <p class="wind-gusts italic">gusts:</p>
     <p class="wind-gusts-output output">${displayWindGust(obj)}</p>
   </div>
   <div class="wind-gadget">
           <svg
             version="1.1"
             id="Layer_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             viewBox="0 0 400 400"
             style="enable-background: new 0 0 400 400"
             xml:space="preserve"
           >
             <style type="text/css">
               .st0 {
                 display: none;
               }
               .st1 {
                 display: inline;
               }
               .st2 {
                 fill: #ffffff;
               }
               .st3 {
                 fill: #ff4500;
               }
               .st4 {
                 fill: #ffffff;
                 stroke: #ffffff;
                 stroke-miterlimit: 10;
               }
             </style>
             <g id="framee">
               <g class="st0">
                 <g class="st1">
                   <path
                     d="M200,8.2c25.9,0,51,5.1,74.7,15.1c22.8,9.7,43.4,23.5,61,41.1c17.6,17.6,31.4,38.1,41.1,61c10,23.6,15.1,48.8,15.1,74.7
             s-5.1,51-15.1,74.7c-9.7,22.8-23.5,43.4-41.1,61c-17.6,17.6-38.1,31.4-61,41.1c-23.6,10-48.8,15.1-74.7,15.1s-51-5.1-74.7-15.1
             c-22.8-9.7-43.4-23.5-61-41.1c-17.6-17.6-31.5-38.1-41.1-61C13.2,251,8.2,225.9,8.2,200s5.1-51,15.1-74.7
             c9.7-22.8,23.5-43.4,41.1-61c17.6-17.6,38.1-31.5,61-41.1C149,13.2,174.1,8.2,200,8.2 M200,368.7c93,0,168.7-75.7,168.7-168.7
             S293,31.3,200,31.3S31.3,107,31.3,200S107,368.7,200,368.7 M200,7.2C93.5,7.2,7.2,93.5,7.2,200S93.5,392.8,200,392.8
             S392.8,306.5,392.8,200S306.5,7.2,200,7.2L200,7.2z M200,367.7c-92.6,0-167.7-75.1-167.7-167.7c0-92.6,75.1-167.7,167.7-167.7
             S367.7,107.4,367.7,200C367.7,292.6,292.6,367.7,200,367.7L200,367.7z"
                   />
                 </g>
               </g>
               <g id="dial">
                 <g>
                   <polygon
                     class="st2"
                     points="115.5,344.9 103.9,364.9 105.2,365.7 116.8,345.6 115.5,344.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="294.8,34.3 283.2,54.4 284.5,55.1 296.1,35.1 294.8,34.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="54.4,283.2 34.3,294.8 35.1,296.1 55.1,284.5 54.4,283.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="364.9,103.9 344.9,115.5 345.6,116.8 365.7,105.2 364.9,103.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="32.3,199.2 9.1,199.2 9.1,200.8 32.3,200.8 32.3,199.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="390.9,199.2 367.7,199.2 367.7,200.8 390.9,200.8 390.9,199.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="35.1,103.9 34.3,105.2 54.4,116.8 55.1,115.5 35.1,103.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="345.6,283.2 344.9,284.5 364.9,296.1 365.7,294.8 345.6,283.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="105.2,34.3 103.9,35.1 115.5,55.1 116.8,54.4 105.2,34.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="284.5,344.9 283.2,345.6 294.8,365.7 296.1,364.9 284.5,344.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="200.8,9.1 199.2,9.1 199.2,32.3 200.8,32.3 200.8,9.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="200.8,367.7 199.2,367.7 199.2,390.9 200.8,390.9 200.8,367.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="153.8,369.3 149.9,384.2 151.3,384.6 155.3,369.7 153.8,369.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="248.7,15.4 244.7,30.3 246.2,30.7 250.1,15.8 248.7,15.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="75.4,323.5 64.5,334.4 65.6,335.5 76.5,324.6 75.4,323.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="334.4,64.5 323.5,75.4 324.6,76.5 335.5,65.6 334.4,64.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="30.3,244.7 15.4,248.7 15.8,250.1 30.7,246.2 30.3,244.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="384.2,149.9 369.3,153.8 369.7,155.3 384.6,151.3 384.2,149.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="15.8,149.9 15.4,151.3 30.3,155.3 30.7,153.8 15.8,149.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="369.7,244.7 369.3,246.2 384.2,250.1 384.6,248.7 369.7,244.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="65.6,64.5 64.5,65.6 75.4,76.5 76.5,75.4 65.6,64.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="324.6,323.5 323.5,324.6 334.4,335.5 335.5,334.4 324.6,323.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="151.3,15.4 149.9,15.8 153.8,30.7 155.3,30.3 151.3,15.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="246.2,369.3 244.7,369.7 248.7,384.6 250.1,384.2 246.2,369.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="238.2,376 236.7,376.3 238.9,386.9 240.4,386.5 238.2,376 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="161.1,13.1 159.6,13.5 161.8,24 163.3,23.7 161.1,13.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="143.6,371 140.3,381.3 141.8,381.8 145.1,371.5 143.6,371 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="258.2,18.2 254.9,28.5 256.4,29 259.7,18.7 258.2,18.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="65.7,319.9 57.6,327.1 58.7,328.3 66.7,321.1 65.7,319.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="341.3,71.7 333.3,78.9 334.3,80.1 342.4,72.9 341.3,71.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="23.7,236.7 13.1,238.9 13.5,240.4 24,238.2 23.7,236.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="386.5,159.6 376,161.8 376.3,163.3 386.9,161.1 386.5,159.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="18.7,140.3 18.2,141.8 28.5,145.1 29,143.6 18.7,140.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="371.5,254.9 371,256.4 381.3,259.7 381.8,258.2 371.5,254.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="72.9,57.6 71.7,58.7 78.9,66.7 80.1,65.7 72.9,57.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="321.1,333.3 319.9,334.3 327.1,342.4 328.3,341.3 321.1,333.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="228.9,377.7 227.4,378 229.1,388.6 230.6,388.4 228.9,377.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="170.9,11.4 169.4,11.6 171.1,22.3 172.6,22 170.9,11.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="134.7,367.8 130.9,377.9 132.3,378.5 136.2,368.4 134.7,367.8 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="267.7,21.5 263.8,31.6 265.2,32.2 269.1,22.1 267.7,21.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="59.6,312.7 51.2,319.5 52.2,320.7 60.5,313.9 59.6,312.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="347.8,79.3 339.5,86.1 340.4,87.3 348.8,80.5 347.8,79.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="22,227.4 11.4,229.1 11.6,230.6 22.3,228.9 22,227.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="388.4,169.4 377.7,171.1 378,172.6 388.6,170.9 388.4,169.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="22.1,130.9 21.5,132.3 31.6,136.2 32.2,134.7 22.1,130.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="368.4,263.8 367.8,265.2 377.9,269.1 378.5,267.7 368.4,263.8 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="80.5,51.2 79.3,52.1 86.1,60.5 87.3,59.6 80.5,51.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="313.9,339.5 312.7,340.4 319.5,348.8 320.7,347.8 313.9,339.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="219.6,379 218.1,379.2 219.2,389.9 220.7,389.7 219.6,379 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="180.8,10.1 179.3,10.3 180.4,21 181.9,20.8 180.8,10.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="126.1,364.2 121.7,374.1 123.1,374.7 127.5,364.8 126.1,364.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="276.9,25.3 272.5,35.2 273.9,35.8 278.3,25.9 276.9,25.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="53.9,305.2 45.1,311.6 46,312.8 54.8,306.5 53.9,305.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="354,87.2 345.2,93.5 346.1,94.8 354.9,88.4 354,87.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="20.8,218.1 10.1,219.2 10.3,220.7 21,219.6 20.8,218.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="389.7,179.3 379,180.4 379.2,181.9 389.9,180.8 389.7,179.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="25.9,121.7 25.3,123.1 35.2,127.5 35.8,126.1 25.9,121.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="364.8,272.5 364.2,273.9 374.1,278.3 374.7,276.9 364.8,272.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="88.4,45.1 87.2,46 93.5,54.8 94.8,53.9 88.4,45.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="306.5,345.2 305.2,346.1 311.6,354.9 312.8,354 306.5,345.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="210.2,379.8 208.7,379.9 209.2,390.6 210.8,390.6 210.2,379.8 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="190.8,9.3 189.2,9.4 189.8,20.2 191.3,20.1 190.8,9.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="117.6,360.1 112.7,369.7 114,370.4 118.9,360.8 117.6,360.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="286,29.6 281.1,39.2 282.4,39.9 287.3,30.3 286,29.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="48.6,297.4 39.5,303.3 40.3,304.6 49.4,298.7 48.6,297.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="359.7,95.4 350.6,101.3 351.4,102.6 360.5,96.7 359.7,95.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="20.1,208.7 9.4,209.2 9.4,210.8 20.2,210.2 20.1,208.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="390.6,189.2 379.8,189.8 379.9,191.3 390.6,190.8 390.6,189.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="30.3,112.7 29.6,114 39.2,118.9 39.9,117.6 30.3,112.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="360.8,281.1 360.1,282.4 369.7,287.3 370.4,286 360.8,281.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="96.7,39.5 95.4,40.3 101.3,49.4 102.6,48.6 96.7,39.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="298.7,350.6 297.4,351.4 303.3,360.5 304.6,359.7 298.7,350.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="189.8,379.8 189.2,390.6 190.8,390.6 191.3,379.9 189.8,379.8 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="209.2,9.3 208.7,20.1 210.2,20.2 210.8,9.4 209.2,9.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="101.3,350.6 95.4,359.7 96.7,360.5 102.6,351.4 101.3,350.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="303.3,39.5 297.4,48.6 298.7,49.4 304.6,40.3 303.3,39.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="39.2,281.1 29.6,286 30.3,287.3 39.9,282.4 39.2,281.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="369.7,112.7 360.1,117.6 360.8,118.9 370.4,114 369.7,112.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="9.4,189.2 9.4,190.8 20.1,191.3 20.2,189.8 9.4,189.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="379.9,208.7 379.8,210.2 390.6,210.8 390.6,209.2 379.9,208.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="40.3,95.4 39.5,96.7 48.6,102.6 49.4,101.3 40.3,95.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="351.4,297.4 350.6,298.7 359.7,304.6 360.5,303.3 351.4,297.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="114,29.6 112.7,30.3 117.6,39.9 118.9,39.2 114,29.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="282.4,360.1 281.1,360.8 286,370.4 287.3,369.7 282.4,360.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="180.4,379 179.3,389.7 180.8,389.9 181.9,379.2 180.4,379 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="219.2,10.1 218.1,20.8 219.6,21 220.7,10.3 219.2,10.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="93.5,345.2 87.2,354 88.4,354.9 94.8,346.1 93.5,345.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="311.6,45.1 305.2,53.9 306.5,54.8 312.8,46 311.6,45.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="35.2,272.5 25.3,276.9 25.9,278.3 35.8,273.9 35.2,272.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="374.1,121.7 364.2,126.1 364.8,127.5 374.7,123.1 374.1,121.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="10.3,179.3 10.1,180.8 20.8,181.9 21,180.4 10.3,179.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="379.2,218.1 379,219.6 389.7,220.7 389.9,219.2 379.2,218.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="46,87.2 45.1,88.4 53.9,94.8 54.8,93.5 46,87.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="346.1,305.2 345.2,306.5 354,312.8 354.9,311.6 346.1,305.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="123.1,25.3 121.7,25.9 126.1,35.8 127.5,35.2 123.1,25.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="273.9,364.2 272.5,364.8 276.9,374.7 278.3,374.1 273.9,364.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="171.1,377.7 169.4,388.4 170.9,388.6 172.6,378 171.1,377.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="229.1,11.4 227.4,22 228.9,22.3 230.6,11.6 229.1,11.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="86.1,339.5 79.3,347.8 80.5,348.8 87.3,340.4 86.1,339.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="319.5,51.2 312.7,59.6 313.9,60.5 320.7,52.1 319.5,51.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="31.6,263.8 21.5,267.7 22.1,269.1 32.2,265.3 31.6,263.8 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="377.9,130.9 367.8,134.7 368.4,136.2 378.5,132.3 377.9,130.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="11.6,169.4 11.4,170.9 22,172.6 22.3,171.1 11.6,169.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="378,227.4 377.7,228.9 388.4,230.6 388.6,229.1 378,227.4 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="52.2,79.3 51.2,80.5 59.6,87.3 60.5,86.1 52.2,79.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="340.4,312.7 339.5,313.9 347.8,320.7 348.8,319.5 340.4,312.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="132.3,21.5 130.9,22.1 134.7,32.2 136.2,31.6 132.3,21.5 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="265.3,367.8 263.8,368.4 267.7,378.5 269.1,377.9 265.3,367.8 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="161.8,376 159.6,386.5 161.1,386.9 163.3,376.3 161.8,376 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="238.9,13.1 236.7,23.7 238.2,24 240.4,13.5 238.9,13.1 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="78.9,333.3 71.7,341.3 72.9,342.4 80.1,334.3 78.9,333.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="327.1,57.6 319.9,65.7 321.1,66.7 328.3,58.7 327.1,57.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="28.5,254.9 18.2,258.2 18.7,259.7 29,256.4 28.5,254.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="381.3,140.3 371,143.6 371.5,145.1 381.8,141.8 381.3,140.3 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="13.5,159.6 13.1,161.1 23.7,163.3 24,161.8 13.5,159.6 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="376.3,236.7 376,238.2 386.5,240.4 386.9,238.9 376.3,236.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="58.7,71.7 57.6,72.9 65.7,80.1 66.7,78.9 58.7,71.7 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="334.3,319.9 333.3,321.1 341.3,328.3 342.4,327.1 334.3,319.9 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="141.8,18.2 140.3,18.7 143.6,29 145.1,28.5 141.8,18.2 			"
                   />
                 </g>
                 <g>
                   <polygon
                     class="st2"
                     points="256.4,371 254.9,371.5 258.2,381.8 259.7,381.3 256.4,371 			"
                   />
                 </g>
               </g>
             </g>
             <g id="needle">
               <path
                 class="st3"
                 d="M200,176.5l10,21.5l11.4,24.7l-19.8-12.3l-1.6-1l-1.6,1l-19.8,12.3l11.4-24.7L200,176.5 M200,169.4l-12.7,27.4
       l-15.6,33.8L200,213l28.3,17.6l-15.7-33.8L200,169.4L200,169.4z"
               />
             </g>
             <g id="direction">
               <g>
                 <path
                   class="st4"
                   d="M191.6,59.8V37.8h3l11.6,17.3V37.8h2.8v22.1h-3l-11.6-17.4v17.4H191.6z"
                 />
               </g>
               <g>
                 <path
                   class="st4"
                   d="M192.7,350.7l2.8-0.2c0.1,1.1,0.4,2,0.9,2.7s1.2,1.3,2.2,1.7c1,0.4,2.1,0.7,3.4,0.7c1.1,0,2.1-0.2,3-0.5
          c0.9-0.3,1.5-0.8,1.9-1.4c0.4-0.6,0.6-1.2,0.6-1.9c0-0.7-0.2-1.3-0.6-1.8c-0.4-0.5-1.1-1-2-1.3c-0.6-0.2-1.9-0.6-3.9-1.1
          c-2-0.5-3.4-0.9-4.3-1.4c-1.1-0.6-1.8-1.2-2.4-2.1s-0.8-1.7-0.8-2.8c0-1.1,0.3-2.2,0.9-3.1c0.6-1,1.6-1.7,2.8-2.2
          c1.2-0.5,2.6-0.8,4.1-0.8c1.6,0,3.1,0.3,4.3,0.8c1.3,0.5,2.2,1.3,2.9,2.3c0.7,1,1,2.2,1.1,3.5l-2.8,0.2c-0.2-1.4-0.7-2.5-1.5-3.2
          c-0.9-0.7-2.2-1.1-3.8-1.1c-1.8,0-3.1,0.3-3.9,1c-0.8,0.6-1.2,1.4-1.2,2.3c0,0.8,0.3,1.4,0.9,2c0.6,0.5,2,1,4.4,1.6
          c2.4,0.5,4,1,4.9,1.4c1.3,0.6,2.2,1.3,2.8,2.3c0.6,0.9,0.9,2,0.9,3.1c0,1.2-0.3,2.3-1,3.3c-0.7,1-1.6,1.8-2.9,2.4
          c-1.3,0.6-2.7,0.9-4.3,0.9c-2,0-3.7-0.3-5-0.9c-1.4-0.6-2.4-1.5-3.2-2.6C193.2,353.5,192.8,352.1,192.7,350.7z"
                 />
               </g>
               <g>
                 <path
                   class="st4"
                   d="M347.7,210.9v-22.1h16v2.6h-13v6.8h12.2v2.6h-12.2v7.5h13.6v2.6H347.7z"
                 />
               </g>
               <g>
                 <path
                   class="st4"
                   d="M42,213l-5.9-22.1h3l3.4,14.5c0.4,1.5,0.7,3,0.9,4.5c0.6-2.4,0.9-3.7,1-4.1l4.2-14.9h3.5l3.2,11.2
          c0.8,2.8,1.4,5.4,1.7,7.8c0.3-1.4,0.6-3,1.1-4.8l3.5-14.2h2.9L58.5,213h-2.8l-4.7-16.8c-0.4-1.4-0.6-2.3-0.7-2.6
          c-0.2,1-0.4,1.9-0.6,2.6L45,213H42z"
                 />
               </g>
             </g>
             <g id="direction_x5F_small">
               <g>
                 <path
                   class="st2"
                   d="M285.5,102.6V90h2.5l5.2,8.4V90h2.4v12.6H293l-5.1-8.2v8.2H285.5z"
                 />
                 <path
                   class="st2"
                   d="M298.2,102.6V90h9.4v2.1h-6.8v2.8h6.3V97h-6.3v3.4h7v2.1H298.2z"
                 />
               </g>
               <g>
                 <path
                   class="st2"
                   d="M288,312.6l2.5-0.2c0.1,0.8,0.5,1.4,0.9,1.8s1.1,0.6,1.8,0.6c0.8,0,1.4-0.2,1.9-0.5c0.4-0.3,0.6-0.8,0.6-1.2
          c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.9-0.5c-0.3-0.1-1-0.3-2-0.6c-1.4-0.3-2.3-0.8-2.9-1.2c-0.8-0.7-1.2-1.5-1.2-2.5
          c0-0.6,0.2-1.2,0.5-1.8s0.9-1,1.6-1.3c0.7-0.3,1.5-0.4,2.5-0.4c1.6,0,2.8,0.3,3.6,1c0.8,0.7,1.2,1.6,1.3,2.8l-2.5,0.1
          c-0.1-0.6-0.3-1.1-0.7-1.4s-0.9-0.4-1.6-0.4c-0.7,0-1.3,0.2-1.7,0.5c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.3,0.1,0.6,0.4,0.8
          c0.3,0.3,1.1,0.6,2.3,0.8c1.2,0.3,2.2,0.6,2.8,0.9c0.6,0.3,1.1,0.7,1.4,1.3c0.3,0.5,0.5,1.2,0.5,2c0,0.7-0.2,1.4-0.6,2
          c-0.4,0.6-1,1.1-1.7,1.4c-0.7,0.3-1.7,0.5-2.7,0.5c-1.6,0-2.8-0.4-3.7-1.1C288.7,315.1,288.1,314,288,312.6z"
                 />
                 <path
                   class="st2"
                   d="M300.4,316.7v-12.6h9.4v2.1h-6.8v2.8h6.3v2.1h-6.3v3.4h7v2.1H300.4z"
                 />
               </g>
               <g>
                 <path
                   class="st2"
                   d="M79,102.6V90h2.5l5.2,8.4V90H89v12.6h-2.6l-5.1-8.2v8.2H79z"
                 />
                 <path
                   class="st2"
                   d="M93.5,102.6l-3-12.6h2.6l1.9,8.7l2.3-8.7h3l2.2,8.8l1.9-8.8h2.6l-3.1,12.6h-2.7l-2.5-9.4l-2.5,9.4H93.5z"
                 />
               </g>
               <g>
                 <path
                   class="st2"
                   d="M81.5,312.6l2.5-0.2c0.1,0.8,0.5,1.4,0.9,1.8c0.5,0.4,1.1,0.6,1.8,0.6c0.8,0,1.4-0.2,1.9-0.5
          c0.4-0.3,0.6-0.8,0.6-1.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.9-0.5c-0.3-0.1-1-0.3-2-0.6c-1.4-0.3-2.3-0.8-2.9-1.2
          c-0.8-0.7-1.2-1.5-1.2-2.5c0-0.6,0.2-1.2,0.5-1.8c0.4-0.6,0.9-1,1.6-1.3c0.7-0.3,1.5-0.4,2.5-0.4c1.6,0,2.8,0.3,3.6,1
          c0.8,0.7,1.2,1.6,1.3,2.8l-2.5,0.1c-0.1-0.6-0.3-1.1-0.7-1.4c-0.4-0.3-0.9-0.4-1.6-0.4c-0.7,0-1.3,0.2-1.7,0.5
          c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.3,0.1,0.6,0.4,0.8c0.3,0.3,1.1,0.6,2.3,0.8c1.2,0.3,2.2,0.6,2.8,0.9c0.6,0.3,1.1,0.7,1.4,1.3
          c0.3,0.5,0.5,1.2,0.5,2c0,0.7-0.2,1.4-0.6,2c-0.4,0.6-1,1.1-1.7,1.4c-0.7,0.3-1.6,0.5-2.7,0.5c-1.6,0-2.8-0.4-3.7-1.1
          C82.2,315.1,81.7,314,81.5,312.6z"
                 />
                 <path
                   class="st2"
                   d="M95.7,316.7l-3-12.6h2.6l1.9,8.7l2.3-8.7h3l2.2,8.8l1.9-8.8h2.6l-3.1,12.6h-2.7l-2.5-9.4l-2.5,9.4H95.7z"
                 />
               </g>
             </g>
           </svg>
         </div>
   `;
  lowerPart.innerHTML = '';
  lowerPart.insertAdjacentHTML('beforeend', html);
}
function showDate() {
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  }).format(now);
  const getNumber = dateStr.slice(-2);
  return `${dateStr}${ordinalNumberSuffix(+getNumber)}`;
}
//  Time
function showTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')} : ${String(
    now.getMinutes()
  ).padStart(2, '0')}`;
}
// Wind gust
function displayWindGust(obj) {
  return obj.wind.gust
    ? `${Math.round(obj.wind.gust * 3.6).toFixed(1)} km/h`
    : 'none';
}
// Add suffix to date
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
// Wind direction represented by N,E,S,W symbols
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
// Display needle in the direction of the wind
export const windDirectionGadget = function (degree, el) {
  el.style.transform = `rotate(${degree}deg)`;
  el.style.transformOrigin = 'center';
};
