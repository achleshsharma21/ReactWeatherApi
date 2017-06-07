var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit(e){
        e.preventDefault();


        var cityname = this.refs.cityname.value;

        if(cityname.length > 0)
            {
                this.refs.cityname.value='';
                this.props.onSearch(cityname);
            }
    },
    render(){
        return(
            <form onSubmit={this.onFormSubmit}> 
            <div><input type="text" ref="cityname" placeholder="Enter City Name"></input></div>
            <div><button>Get Weather</button></div>
            </form>
        );

    }
});

module.exports = WeatherForm;