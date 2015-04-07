import EventEmitter from "eventemitter2";

let emitter = new EventEmitter.EventEmitter2({
    wildcard: true,
    delimeter: "::",
    newListener: false
});

export default emitter;
