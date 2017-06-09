var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=423a0dddd656fddb2e9bdc700f0d3059&units=imperial';

//423a0dddd656fddb2e9bdc700f0d3059;


module.exports = {
  getTemp: function (location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to fetch weather');
    });
  }
}