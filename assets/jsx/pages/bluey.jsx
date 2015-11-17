window.$ = require('jquery');
var React = require('react');
var Link = require('../Link.jsx');
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require("gsap");

var Bluey = React.createClass({
    render: function() {
        var style = {
            background:this.props.darkColor
        }
        return (
            <div className="page__content" style={style}>
                <h2>Blue Dog</h2>
            </div>
        );
    }
});

module.exports = Bluey;
