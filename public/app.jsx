const React = require('react');
const ReactDOM = require('react-dom');

const GreeterMessage = require("./components/GreeterMessage");
const GreeterForm = require("./components/GreeterForm");

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

var name = "Bobby";

ReactDOM.render(
    <Greeter name={name} message={"How are you?"}/>, document.getElementById("app"));
