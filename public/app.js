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

const GreeterForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();
        const name = this.refs.name.value;
        const message = this.refs.message.value;
        const updates = {};
        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        console.log(updates);
        this.props.onNewParams(updates);

    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="enter name"/><br />
                <textarea ref="message" placeholder="enter message" /><br />
                <button>Set Name</button>
            </form>
        );
    }
});

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
