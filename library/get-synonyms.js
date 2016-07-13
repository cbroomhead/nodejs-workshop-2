var request = require('request');
var prompt = require('prompt');
var colors = require('colors');

var emoji = require('emojis')

var SynonymAPI = require('./synonyms.js');


var apikey = 'c9a30566e0d2069d77ddea32898ba8bb';
prompt.get('word', function(err, res) {

            if (err) {
                console.log('there was an error1');
            }
            else {
                var userWord = res.word;
                var newWord = new SynonymAPI(apikey);
                newWord.getSynonyms(userWord, function(err, res) {
                    console.log(res)
                    if (err) {
                        console.log('there was an error2');
                    }
                    else {
                        console.log(res);
                        //console.log(emoji.get('smile'));
                    }
                })
            }
})
            