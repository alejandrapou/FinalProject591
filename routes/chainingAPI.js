"use strict";

const express = require('express')
const router = express.Router()

const request = require('request-promise-lite')
const async = require('async')

const yelp = require('yelp-fusion');
const yelpConfig = require('../../twitter/config/yelpConfig');
const client = yelp.client(yelpConfig.apiKey);



router.get('/', (req, res) => {
    async.waterfall([
        function(callback) {
            let restaurant;
            let searchRequest = {
                location: 'miami, fl',
                restaurant: null

            }
            //first API call
            console.log('Finding best restaurant')
            client.search(searchRequest).then(response => {
                const firstResult = response.jsonBody.businesses[0];
                const rest = firstResult.name;
                const prettyJson = JSON.stringify(firstResult, null, 4);
                const prettyJson2 = JSON.stringify(rest, null, 4);
                const phone = firstResult.phone;
                const prettyJson3 = JSON.stringify(phone, null, 4);


                searchRequest.address = JSON.stringify(response.jsonBody.businesses[0].address, null, 4);
                callback(null, prettyJson2);
            });
        }
    ],
        //second API call
    function(err, result, restaurant) {
        // console.log("restaurant is " + restaurant)
        const wikiOutcome = result;
        let str = restaurant.nameRestaurant;
        var request = require('request');
        var options = {
            method: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + str,
            qs: {name: str}
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let jsonBody = JSON.parse(body);
            // console.log(jsonBody);
            res.json(jsonBody);
        })
    });
});

module.exports = router;



