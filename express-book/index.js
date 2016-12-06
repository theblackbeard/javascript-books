"use strict";
const   express = require('express')
,       http = require('http')
,       path = require('path')
,       logger = require('morgan')
,       fs = require('fs')
,       apiRouter = require('./router/router.js')
,       app = express();

app.use(logger("short"));
app.use((req, res, next) => {
    console.log("In Comes a " + req.method + " to " + req.url);
    next();
});

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath)); 

app.use("/api", apiRouter);

app.use((req, res) => {
    res.statusCode = 404;
    res.end("404!")
})

/*
app.use((req, res, next) => {
    const filePath = path.join(__dirname, "public", req.url);
    fs.stat(filePath, (err, fileInfo) => {
        if(err){ next(); return; }
        if(fileInfo.isFile()) res.sendFile(filePath);
        else next();
    })
})
 
app.get('/' , (req, res)=> {
    res.send('Secrect info: the password is "swordfidh"!');
})


*/
http.createServer(app).listen(3000);
