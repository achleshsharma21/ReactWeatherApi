var React = require('react');

var WeatherMessage = ({temp , cityname}) => {
    
    return(
      <div>
        <h3 className="text-center">It's {temp} F in {cityname} </h3>
    </div>  
    );
}

module.exports = WeatherMessage;