var React = require('react');
var {Link} = require('react-router');
var PropTypes = React.PropTypes;

var Nav = React.createClass({

  render: function() {
    return (
      <div>
        <h2>
          This is the nav component
        </h2>
        <Link to="/">Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>

      </div>
    );
  }

});

module.exports = Nav;
