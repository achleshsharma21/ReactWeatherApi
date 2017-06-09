var React = require('react');

var WeatherMessage = ({temp , cityname}) => {
    
    return(
      <div>
        <p>It's {temp} F in {cityname} </p>
    </div>  
    );
}

module.exports = WeatherMessage;