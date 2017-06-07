var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

    getInitialState(){
        return{
            cityname: 'Miami',
            temp: 88
        }

    },

    handleSearch(cityname){
        this.setState({
           cityname: cityname,
           temp: 23 
        });
    },

    render(){
        var {temp , cityname} = this.state;
        return(
            <div>
            <h3>Get Weather</h3>
            <WeatherForm onSearch={this.handleSearch}/>
            <WeatherMessage temp={temp} cityname={cityname}/>
            </div>
        );
    }
});

module.exports = Weather;