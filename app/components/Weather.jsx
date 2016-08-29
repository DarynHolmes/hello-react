var React = require('react');
var PropTypes = React.PropTypes;
const WeatherForm = require('components/WeatherForm');
const WeatherMessage = require('components/WeatherMessage');

var Weather = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }

});

module.exports = Weather;
