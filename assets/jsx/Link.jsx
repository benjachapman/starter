var React = require('react');

var Link = React.createClass({
    getInitialState: function(){
        return({
            pressed: false,
            link : null
        });
    },
    goToLink: function(link){
        var isPressed = !this.state.pressed
        this.setState({
            pressed: isPressed,
            link: link,
        });
    },
    componentDidUpdate(){
        var self = this;
        if(self.state.pressed === true && self.state.link !== null) {
            setTimeout(function(){
                self.props.goToLink(self.state.link, self.props.slot);
            },100);

        }
    },
    render: function() {
        var classes = "linky ",
            depressionStyle = {
                backgroundColor: this.props.darkColor
            };

        if(this.state.pressed) {
            classes += "linky--pressed";
        }
        console.log("state:"+this.state.pressed);
        return (
            <a className={classes} onClick={this.goToLink.bind(this, this.props.target)}>
                <div className="linky__size-reserver">{this.props.text}</div>
                <div className="linky__depression" style={depressionStyle}>
                    {this.props.text}
                </div>
            </a>
        );
    }
});

module.exports = Link;
