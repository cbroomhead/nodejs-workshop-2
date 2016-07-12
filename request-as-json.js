var request = require('request');

function requestJson (url, callback){
    request(url, function(err, res) {
            if(err) {
                callback(err);  
                console.log("Invalid url");
            }
            else {
                try {
                    var parsed = JSON.parse(res.body);
                    callback(null, parsed);
                    console.log("If you see this, the JSON was parsed properly");
                }
                catch(err) {
                    callback(err);
                    //notify our developers
                    console.log("If you see this, there was an error with parsing the JSON ");
                }
            }   
    })   
}


requestJson('https://api.wheretheiss.at/v1/satellites/25544', function (err, res) {
    if(err) {
        console.log('There was a problem getting your JSON');
    } else {
        console.log("Everything worked, this is the result: " + res.name);
        //console.log(res);
    }
})
