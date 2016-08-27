const React = require('react');
const ReactDOM = require('react-dom');

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
                <button>Update</button>
            </form>
        );
    }
});

module.exports = GreeterForm;
