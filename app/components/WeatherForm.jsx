var React = require('react');
var PropTypes = React.PropTypes;

var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    const location = this.refs.location.value;

    if(location && location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
