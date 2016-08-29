var React = require('react');
var PropTypes = React.PropTypes;

var WeatherForm = React.createClass({

  render: function() {
    return (
      <div>
        <form>
          <input type="text" /><br />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
