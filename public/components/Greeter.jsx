const React = require('react');
const GreeterMessage = require("./GreeterMessage");
const GreeterForm = require("./GreeterForm");

const Greeter = React.createClass({

    getInitialState: function() {
        return {name: this.props.name, message: this.props.message};
    },
    handleNewParams: function(params) {
        this.setState(params);
    },
    render: function() {
        const name = this.state.name;
        const message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewParams={this.handleNewParams}/>
            </div>
        );
    }
});

module.exports = Greeter;
