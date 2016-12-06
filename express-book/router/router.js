const express = require('express');

const api  = express.Router();

api.use((req, res, next) => {
    next();
})

api.get("/users", (req, res) => {
    console.log("Ok - Teste")
});