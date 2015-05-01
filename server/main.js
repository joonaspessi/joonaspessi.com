"use strict";
import express from "express";
import workout from "./routes/workout.js";
import strava from "./routes/strava.js";
import dbPopulator from "./populateDB.js";

dbPopulator()
    .then(function() {
        let app = express();

        app.use("/api/v1/strava", strava);
        app.use("/api/v1/workout", workout);
        app.use("/", express.static("app"));

        let server = app.listen(3000, function() {
            let host = server.address().address;
            let port = server.address().port;
            console.log('Example app listening at http://%s:%s', host, port);
        });
})
