var React = require('react');
var {Link, IndexLink} = require('react-router');
var PropTypes = React.PropTypes;

var Nav = React.createClass({

  render: function() {
    return (
      <div>
        <h2>
          This is the nav component
        </h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

      </div>
    );
  }

});

module.exports = Nav;
