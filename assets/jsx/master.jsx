window.$ = require('jquery');
var React = require('react');
var randomcolor = require("randomcolor");
require("velocity-animate");
var Page = require("./Page.jsx");
var Greenie = require("./pages/greenie.jsx")
var Bluey = require("./pages/bluey.jsx")

var Master = React.createClass({
    getInitialState: function() {
        this.hasRenderedOnce = false;
        this.i = 0;
        this.j = 10;
        this.pageOneKey = 0;
        this.pageTwoKey = 1000;
        this.z = 1000000;
        this.map = ["one","two","three","four"];

        this.imageMap = ["cbwaterfall2.jpg","treess.jpg","for.jpg","treess.jpg"];
        this.transitionIndex = 0;
        this.backgroundImageOne = 0;
        this.backgroundImageTwo = 1;
        this.imageIndex = 1;
        return({
            slotOnePage: "greenie",
            slotTwoPage: "bluey",
            slotOneColor: randomcolor({luminosity:"dark"}),
            slotTwoColor: randomcolor({luminosity:"dark"})
        });
    },
    alerthing: function(thing){
        alert(thing);
    },
    goToLink: function(page, activeSlot) {
        if(activeSlot === 2) {
            this.setState({
                transition: 2,
                slotOnePage: page,
                slotOneColor: randomcolor({luminosity:"dark"})
            });
        } else {
            this.setState({
                transition: 1,
                slotTwoPage: page,
                slotTwoColor: randomcolor({luminosity:"dark"})
            });
        }

    },
    componentDidMount: function() {
        var self = this;
        ee.addListener("goToPage", self.goToLink);
    },
    componentDidUpdate: function() {
        var self = this;
        setTimeout(function(){
            if(self.state.transition === 1) {
                self.pageOneKey++;
            } else {
                self.pageTwoKey++;
            }
        },50)
    },
    render: function() {
        var self = this,
            transition = false,
            mastaClasses = "masta "
            pageOneClasses= "page page--one ",
            pageTwoClasses= "page page--two ",
            higherZ = this.z,
            z1 = this.z,
            z2 = this.z;
        var backgroundOne,
            backgroundTwo;

        this.z--;


        if(this.state.transition === 1){
            pageOneClasses +="page--transition-out ";
            pageOneClasses += this.map[this.transitionIndex];
            this.backgroundImageOne = this.imageIndex;

            this.transitionIndex = this.transitionIndex === 3 ? 0 : this.transitionIndex + 1;
            this.imageIndex = this.imageIndex === 3 ? 0 : this.imageIndex + 1;

            z2=this.z
        } else if (this.state.transition === 2){
            pageTwoClasses += "page--transition-out ";
            pageTwoClasses += this.map[this.transitionIndex];
            this.backgroundImageTwo = this.imageIndex;

            this.transitionIndex = this.transitionIndex === 3 ? 0 : this.transitionIndex + 1;
            this.imageIndex = this.imageIndex === 3 ? 0 : this.imageIndex + 1;
            z1=this.z;
        }


        backgroundOne = this.imageMap[this.backgroundImageOne];
        backgroundTwo = this.imageMap[this.backgroundImageTwo];

        return (
            <div className="masta">
                <Page
                    key={this.pageOneKey}
                    pageId={this.pageOneKey}
                    z={z1}
                    darkColor={this.state.slotOneColor}
                    className={pageOneClasses}
                    goToLink={this.goToLink}
                    slot={1}
                    transition={transition}
                    page={this.state.slotOnePage}
                    backgroundImage={backgroundOne}/>
                <Page
                    key={this.pageTwoKey}
                    pageId={this.pageTwoKey}
                    z={z2}
                    darkColor={this.state.slotTwoColor}
                    className={pageTwoClasses}
                    goToLink={this.goToLink}
                    slot={2}
                    transition={transition}
                    page={this.state.slotTwoPage}
                    backgroundImage={backgroundTwo}/>
            </div>
        );
    }
});

module.exports = Master;
