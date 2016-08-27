const React = require('react');
const ReactDOM = require('react-dom');

const GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hi {this.props.name}!</h1>
                <p>{this.props.message}</p>

            </div>
        );
    }
});

module.exports = GreeterMessage;
