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
            <input type="text" ref="cityname" placeholder="Enter City Name"></input>
            <button className="button expanded hollow">Get Weather</button>
            </form>
        );

    }
});

module.exports = WeatherForm;