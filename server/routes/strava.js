var express = require("express");
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));
var path = require("path");
var _ = require("lodash");
var router = express.Router();

var stravaAccessToken = process.env["STRAVA_ACCESS_TOKEN"];

function encodeQueryParameters(parameters) {
    var query = _.map(parameters, function(value, key) {
        return key + "=" + value;
    }).join("&");

    return "?" + query;
}

function getResource(url, callback) {
    return request(url)
        .then(response => JSON.parse(response[1]))
        .then(workouts => callback(workouts));
}

function getWorkouts() {
    var resource = "https://www.strava.com/api/v3/activities"

    var query = {
        "access_token": stravaAccessToken,
        "page": 1,
        "per_page": 200
    };

    var url = resource + encodeQueryParameters(query);

    return new Promise(function(resolve, reject) {
        var total = [];
        function cb(workouts) {
            total.push(workouts);
            // If we still have workouts, we have fetch more to get them all.
            if (workouts.length > 0) {
                ++query.page;
                getResource(resource + encodeQueryParameters(query), cb);
            } else {
                return resolve(_.flattenDeep(total));
            }
        }

        getResource(url, cb);
    });
}

router.get("/", function(req, res) {
    getWorkouts()
        .then(data => res.send(data))
        .catch(err => res.status(500).send(err));
});

module.exports = router;
