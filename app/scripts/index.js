var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Cookies = require('js-cookie');

var AppContainer = require('./components/app.jsx');


ReactDOM.render(
  React.createElement(AppContainer),
  document.getElementById('app')
);

Cookies.set('username', 'Matt');
