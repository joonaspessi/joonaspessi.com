"use strict";

import express from "express";
import model from "../model.js";

function jsonOr404(req, res, next) {
    return function(data) {
        if (!data) {
            res.send(404);
        } else {
            res.json(data);
        }
        return next();
    };
}

let router = express();

router.get("/", function(req, res) {
    return model.findAll().then(data => res.json(data));
});


export default router;
