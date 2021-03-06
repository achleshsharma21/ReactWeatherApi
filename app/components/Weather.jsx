var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

    getInitialState(){
        return{
            isLoading: false
        }

    },

    handleSearch(cityname) {
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(cityname).then(function (temp) {
      that.setState({
        cityname: cityname,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },


    render(){
        var {isLoading, temp , cityname} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching Weather..</h3>
            }
            else if(temp && cityname) {
                return  <WeatherMessage temp={temp} cityname={cityname}/>;
            }
        }
        return(
            <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;