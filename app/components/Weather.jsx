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
    //debugger;

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
                return <h3>Fetching Weather..</h3>
            }
            else if(temp && cityname) {
                return  <WeatherMessage temp={temp} cityname={cityname}/>;
            }
        }
        return(
            <div>
            <h3>Get Weather</h3>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;