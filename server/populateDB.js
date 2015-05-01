"use strict";

import Promise from "bluebird";
import _ from "lodash";
import Workout from "./model";
import path from "path";

var readFile = Promise.promisify(require("fs").readFile);


export default function populateDataBase() {
    return Promise.all([
        Workout.sync({force: true})
    ])
    .then(() => readFile(path.resolve("app", "mock-api", "workouts.json"), "utf8"))
    .then(file => JSON.parse(file))
    .map(workout => Workout.create({
        name: workout.name,
        distance: workout.distance,
        elapsed_time: workout.elapsed_time,
        average_speed: workout.average_speed
    }));
}
