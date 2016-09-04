var React = require('react');
var PropTypes = React.PropTypes;
const WeatherForm = require('components/WeatherForm');
const WeatherMessage = require('components/WeatherMessage');
const openweathermap = require('api/open-weather-map');

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    const that = this;

    this.setState({
      isLoading: true
    });

    openweathermap.getTemp(location).then (function(temp) {
      that.setState ({
        location,
        temp
      });
      that.setState({ isLoading: false});
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({ isLoading: false});
    });
  },

  render: function() {
    const {temp, location, isLoading} = this.state;
    const renderMessage = ()=> {
      if (isLoading) {
        return <h3>Featching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage {...this.state} />;
      } else {

      }
    };

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch = {this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
