window.$ = require('jquery');
var React = require('react');

var Image = React.createClass({
    render: function() {
        var src = this.props.src,
            prefix = "/img/",
            baseName =  src.substr(0, src.lastIndexOf('.')),
            extension = src.substr(src.lastIndexOf('.') + 1),
            sizes = {
                small: prefix+baseName+"-sm."+extension,
                large: prefix+baseName+"-lg."+extension
            }

        return (
            <picture>
                <source srcSet={sizes.large} media="(min-width: 400px)" />
                <img srcSet={sizes.small} alt={this.props.alt} />
            </picture>
        );
    }
});

module.exports = Image;
