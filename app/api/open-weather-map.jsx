const axios = require('axios');

const API_KEY = '2803a89a9199c3d5ccb02277d47bd771';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

// 2803a89a9199c3d5ccb02277d47bd771

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2803a89a9199c3d5ccb02277d47bd771&units=metric

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
