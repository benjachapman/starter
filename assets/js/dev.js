window.$  = window.jQuery = require("jquery");
window.React = require('react');
var Master = require("../jsx/Master.jsx");
var EventEmitter = require("wolfy87-eventemitter");

$(function(){
	var appDiv = document.getElementById('app');
	window.ee = new EventEmitter();
	React.render(<Master />, appDiv);
});
