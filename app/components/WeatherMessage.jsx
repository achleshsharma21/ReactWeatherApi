var React = require('react');

var WeatherMessage = React.createClass({

    render(){
        var {temp , cityname} = this.props;
        return(
            
            <div>
                <p>It's {temp} F in {cityname} </p>
            </div>
        );
    }
});

module.exports = WeatherMessage;