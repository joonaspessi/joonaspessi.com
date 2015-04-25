import Hammer from "hammerjs";
import emitter from "./emitter.js";

class Gestures {
    constructor() {
        var hammertime = new Hammer(document.body);

        hammertime.on("swiperight", event => emitter.emit("gesture::swipeRight"));
        hammertime.on("swipeleft", event => emitter.emit("gesture::swipeLeft"));
    }
}

export default Gestures;
