var React = require('react');
var Link = require("./Link.jsx");

var Nav = React.createClass({
    // getDefaultProps: function(){
    //     return({
    //         ind
    //     });
    // },
    render: function() {
        var isGreenie = this.props.page === "greenie",
            isBluey = this.props.page === "bluey",
            isRed = this.props.page === "red",
            navStyle = {
                color: this.props.darkColor
            }

        return (
            <div className="nav" style={navStyle}>
                <Link {...this.props} target="greenie" text="Greenie"/>
                <Link {...this.props} target="bluey" text="Bluey Page"/>
                <Link {...this.props} target="red" text="Red Page"/>

            </div>
        );
    }
});

module.exports = Nav;
