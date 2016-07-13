//var checkJSON = require("./node_modules/request-json.js");

var prompt = require('prompt');
var request = require('request');
var colors = require('colors');

function getWeather() {
    prompt.get('location', function(err, city) {
        if (err) {
            console.log('there was an error');
        }
        else {
            var myUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city.location;
            //cityLocation = city.location;
            //console.log(city.location);
            request(myUrl, function(err, res) {
                if (err) {
                    console.log('there was an error');
                }
                else {
                    var lat = JSON.parse(res.body).results[0].geometry.location.lat;
                    var lon = JSON.parse(res.body).results[0].geometry.location.lng;
                    var weatherURL = 'https://api.forecast.io/forecast/' + '0db24492b20dd17d062597f6b31ae860/' + lat.toFixed(4) + ',' + lon.toFixed(4);
        //console.log(weatherURL);
                    request(weatherURL, function(err, response) {
                        if (err) {
                            console.log('there was an error');
                        }
                        else {
                            var weather = (JSON.parse(response.body));
                            console.log(weather);
                            /*weather.forEach(function (item){
                                console.log(weather.daily.data.summary.rainbow);
                            })*/
                                    for (var i=0; i < 5; i++){
                                        console.log(weather.daily.data[i].summary.rainbow);
                                    }
                        }
                    })
                }
            })
        }
    })
};

getWeather();