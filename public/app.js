const Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Heyo React App</h1>
        <p>This is from the component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById("app")
);
