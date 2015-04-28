"use strict";

import restify from "restify";

let server = restify.createServer();
server.use(restify.bodyParser());

server.get(/\/?.*/, restify.serveStatic({
    directory: "./app",
    default: "index.html"
}));

server.listen(3000, () => console.log(server.name, server.url));
