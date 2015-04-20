import _ from "lodash";
import request from "superagent";

class Model {
    constructor() {
        this.workouts = null;
    }

    loadAsync() {
        if(this.workouts === null) {
            this.workouts = new Promise(function(resolve, reject) {
                request
                    .get("/mock-api/workouts.json")
                    .end(function(err, res) {
                        if (err) {
                            reject(reject);
                        }
                        // TODO handle json parse error handling
                        resolve(JSON.parse(res.text));
                    });
            });
            return this.workouts;
        } else {
            return this.workouts
        }
    }
};

export default new Model();
