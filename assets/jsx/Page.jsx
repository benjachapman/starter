window.$ = require('jquery');
var React = require('react');
var randomcolor = require("randomcolor");
var Greenie = require("./pages/greenie.jsx");
var Bluey = require("./pages/bluey.jsx");
var Red = require("./pages/red.jsx");
var Nav = require("./Nav.jsx");
var Image = require('./Image.jsx');

var Page = React.createClass({
    getInitialState: function(){
            this.cachedPage = null;
            this.page = null;
            this.i = 0;
            return(null);
    },
    render: function() {
        var backgroundStyle = {
                background: this.props.darkColor,
                zIndex: this.props.z
            },
            i = 0,
            src ="/img/";

        src += this.props.backgroundImage;

        if(this.cachedPage !== this.props.page) {
            if(this.props.page === "greenie") {
                this.page =(<Greenie key={this.i++} {...this.props}/>);
            } else if(this.props.page === "bluey") {
                this.page =(<Bluey key={this.i++} {...this.props}/>);
            } else if(this.props.page === "red") {
                this.page =(<Red key={this.i++} {...this.props}/>);
            }
        }

        this.cachedPage = this.props.page;

        return (
            <div className={this.props.className} style={backgroundStyle}>
                <Nav key={this.i++} {...this.props}/>
                    {this.page}
            </div>
        );
    }
});

module.exports = Page;
