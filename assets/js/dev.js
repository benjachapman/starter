window.$  = window.jQuery = require("jquery");
window.React = require('react');
var Master = require("../jsx/Master.jsx");
var EventEmitter = require("wolfy87-eventemitter");
var gsap = require("gsap");
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

$(function(){
	var appDiv = document.getElementById('app');
	window.ee = new EventEmitter();
	window.sm = new ScrollMagic.Controller();
	React.render(<Master />, appDiv);
});
