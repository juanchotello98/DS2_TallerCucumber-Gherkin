const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const assert = require('assert');
const fetch = require("node-fetch");
var request = require('request');


let route;
let answer = {};
let word;

    Given('I enter in the page', function () {
       route = 'https://restcountries.eu';
    });

    When('I make an API call using callbacks', function () {
        fetch(route+'/rest/v2/name/comlombia')
            .then(function(response){
                return response.json();
            })
            .then(function(myJson){
                answer = myJson[0]
                word = answer['region'].toString()
            });
    });

    Then('Show the region {string}', function (input) {
        fetch(route+'/rest/v2/name/comlombia')
        .then(function(response){
                return response.json();
            })
        .then(function(myJson){
            answer = myJson[0]
            word = answer['region'].toString()
            console.log(word)
            assert.equal(word, input);
        });
    });
