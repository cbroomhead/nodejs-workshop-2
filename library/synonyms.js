var prompt = require('prompt');
var request = require('request');

function SynonymAPI(apikey) {
    this.apikey = apikey;
}



SynonymAPI.prototype = {
        getSynonyms: function(word, callback) {
            //http://words.bighugelabs.com/api/{version}/{api key}/{word}/{format}
            var APIurl = 'http://words.bighugelabs.com/api/2/' + this.apikey + "/" + word + "/json";
            request(APIurl, function(err, res) {
                if (err) {
                    callback(err);
                }
                else {
                    try {
                        var parsed = (JSON.parse(res.body));
                        console.log(parsed);
                        callback(null, parsed);
                    }
                    catch (err) {
                        callback(err);
                    }
                }
            })
        }
    }
    //SynonymAPI();

module.exports = SynonymAPI;

//module.exports = {SynonymAPI : SynonymAPI};


