import Hammer from "hammerjs";
import emitter from "./emitter.js";

class Gestures {
    constructor() {
        var hammertime = new Hammer(document.body);

        hammertime.on("swiperight", event => emitter.emit("sidebar::open"));
        hammertime.on("swipeleft", event => emitter.emit("sidebar::close"));
    }
}

export default Gestures;
