const myToken = '711e862226168791fee7746ccb4cef05'; 

const coordsKiev = 'lat=50.4333&lon=30.5167'; 
const coordsLondon = 'lat=51.509865&lon=-0.118092'; 
const coordsNewYork = 'lat=43.0004&lon=-75.4999'; 

const linkFetchKiev = `https://api.openweathermap.org/data/2.5/weather?${coordsKiev}&appid=${myToken}`; 
const linkFetchLondon = `https://api.openweathermap.org/data/2.5/weather?${coordsLondon}&appid=${myToken}`; 
const linkFetchNewYork = `https://api.openweathermap.org/data/2.5/weather?${coordsNewYork}&appid=${myToken}`; 

const kiev = 'kiev'; 
const london = 'london'; 
const newYork = 'new-york';

const kievTemperature = '.kiev_temperature'; 
const londonTemperature = '.london_temperature';
const newYorkTemperature = '.new-york_temperature';

const cityNameClass = '_name';
const cloudsClass = '_clouds';
const iconsClass = '_icons';
const directionWindClass = '_direction_wind';
const speedWindClass = '_speed_wind';
const sunriseClass = '_sun_rise';
const sunsetClass = '_sun_set';

const windDirectionStroke = 'wind degree to direction: '; 
const windSpeedStroke = 'wind speed: ';
const sunriseStroke = 'sunrise: ';
const sunsetStroke = 'sunset: ';

const deg = '&deg'; 

const linkIcons = '<img src="http://openweathermap.org/img/wn/'; 
const linkIconsPng = '@2x.png">'; 

const buttonKelvin = '.button_kelvin'; 
const buttonFahrenheit = '.button_fahrenheit';



function divText (a, b) {  
        document.querySelector(a).textContent = b;
}


function divInner (a, b) {
        document.querySelector(a).innerHTML = b;
}


function buttons (btn1, id1, btn2, id2, dataTemp) {
    document.querySelector(btn1).addEventListener("click", function() {
        document.querySelector(id1).innerHTML = Math.round(dataTemp) + ' K'});
    
    document.querySelector(btn2).addEventListener("click", function() {
        document.querySelector(id2).innerHTML = Math.round(1.8 * (dataTemp - 273) + 32) + deg + 'F'});
}


fetch(linkFetchKiev)
        .then (function(resp) {return resp.json()})
        .then (function(data){
            console.log(data);
        
      
        divText(`.${kiev}${cityNameClass}`, data.name); 
        divInner(kievTemperature, `${Math.round(data.main.temp - 273)}${deg} C`); 
        divInner(`.${kiev}${cloudsClass}`, data.weather[0] ['description']); 
        divInner(`.${kiev}${iconsClass}`, `${linkIcons}${data.weather[0]['icon']}${linkIconsPng}`); 
        divInner(`.${kiev}${directionWindClass}`, `${windDirectionStroke}${data.wind.deg}${deg}`); 
        divInner(`.${kiev}${speedWindClass}`, `${windSpeedStroke}${data.wind.speed} m/s`); 
        divInner(`.${kiev}${sunriseClass}`, `${sunriseStroke}${new Date(data.sys.sunrise * 1000).toLocaleTimeString('it-IT')}`); 
        divInner(`.${kiev}${sunsetClass}`, `${sunsetStroke}${new Date(data.sys.sunset * 1000).toLocaleTimeString('it-IT')}`); 

        buttons(buttonKelvin, kievTemperature, buttonFahrenheit, kievTemperature, data.main.temp);    
        })

fetch(linkFetchLondon)
        .then (function(resp) {return resp.json()})
        .then (function(data){
            console.log(data);

        divText(`.${london}${cityNameClass}`, data.name);
        divInner(londonTemperature, `${Math.round(data.main.temp - 273)}${deg} C`);
        divInner(`.${london}${cloudsClass}`, data.weather[0] ['description']);
        divInner(`.${london}${iconsClass}`, `${linkIcons}${data.weather[0]['icon']}${linkIconsPng}`);
        divInner(`.${london}${directionWindClass}`, `${windDirectionStroke}${data.wind.deg}${deg}`);
        divInner(`.${london}${speedWindClass}`, `${windSpeedStroke}${data.wind.speed} m/s`);
        divInner(`.${london}${sunriseClass}`, `${sunriseStroke}${new Date(data.sys.sunrise * 1000).toLocaleTimeString('it-IT')}`);
        divInner(`.${london}${sunsetClass}`, `${sunriseStroke}${new Date(data.sys.sunset * 1000).toLocaleTimeString('it-IT')}`);

        buttons(buttonKelvin, londonTemperature, buttonFahrenheit, londonTemperature, data.main.temp);    
        })

fetch(linkFetchNewYork)
        .then (function(resp) {return resp.json()})
        .then (function(data){
            console.log(data);

        divText(`.${newYork}${cityNameClass}`, data.name);
        divInner(newYorkTemperature, `${Math.round(data.main.temp - 273)}${deg} C`);
        divInner(`.${newYork}${cloudsClass}`, data.weather[0] ['description']);
        divInner(`.${newYork}${iconsClass}`, `${linkIcons}${data.weather[0]['icon']}${linkIconsPng}`);
        divInner(`.${newYork}${directionWindClass}`, `${windDirectionStroke}${data.wind.deg}${deg}`);
        divInner(`.${newYork}${speedWindClass}`, `${windSpeedStroke}${data.wind.speed} m/s`);
        divInner(`.${newYork}${sunriseClass}`, `${sunriseStroke}${new Date(data.sys.sunrise * 1000).toLocaleTimeString('it-IT')}`);
        divInner(`.${newYork}${sunsetClass}`, `${sunriseStroke}${new Date(data.sys.sunset * 1000).toLocaleTimeString('it-IT')}`);

        buttons(buttonKelvin, newYorkTemperature, buttonFahrenheit, newYorkTemperature, data.main.temp);      
        })