"use strict";

import Promise from "bluebird";
import Workout from "./model";
import fs from "fs";
import path from "path";

// Promise.promisify(fs);


fs.readFile(path.resolve("app", "mock-api", "workouts.json"), function(err, data) {

})

export default function populateDataBase() {
    return Promise.all([
        Workout.sync({force: true})
    ])
    //.then(fs.readFile(path.resolve("..", "app", "mock-api", "workouts.json"))
    //.then(JSON.parse)
    .then(() => Workout.create({
        name: "hello workout",
        distance: 5,
        elapsed_time: 5,
        avg_speed: 1
    }));
}
