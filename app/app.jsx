const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('components/Main');
const Weather = require('components/Weather');
const About = require('components/About');
const Examples = require('components/Examples');

// 2803a89a9199c3d5ccb02277d47bd771

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component={Main}>
      <IndexRoute component={Weather} />
      <Route path = "/about" component={About} />
      <Route path = "/examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById("app")
);
