window.$ = require("jquery");
window._ = require("lodash");

$("body").css("background","blue");

var sayYo = function() {
	console.log("yo");
};
$(function() {
	$('.test-div').click(function() {
        _.debounce(sayYo(), 1500);
	  //sayYo();

	});
});