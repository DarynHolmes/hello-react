const React = require('react');
const Nav = require('components/Nav');

const Main = React.createClass({

  render: function() {
    return (
      <div>
        <Nav />
        <h2>Main component</h2>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
