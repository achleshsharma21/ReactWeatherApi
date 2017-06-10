var React = require('react');

var About = (props) => {
    return(
        <div>
        <h3 className="text-center">About Commponent</h3>
        <p> This is a weather app built on React js a JavaScript library.</p>
        <p> Here are some of the tools I used:</p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react"> React </a> - This is the JavaScript library used.
            </li>       
            <li>
                <a href="http://openweathermap.org"> Open Weather Map </a> - I used Open Weather Map API to search for data.
            </li>
        </ul>
        </div>
    );

};

module.exports = About;