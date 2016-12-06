
"use strict";
    const fs = require('fs')
,   stream = fs.createReadStream(process.argv[2]);

stream.on('data', function(chunk){
    process.stdout.write(chunk);
});

stream.on('error', function(err){
    process.stderr.write("ERROR: " + err.message + "\n");
});

/*
fs.readFile('target.txt', function(err, data){
    if(err) throw err;
    console.log(data.toString())
})

fs.writeFile('target.txt', 'Teste', function(err){
    if(err) throw  err;
    console.log("File Saved");
})
/*
const fs = require('fs')
,   spawn = require('child_process').spawn
,   filename = process.argv[2];

if(!filename){ throw Error("A file to Watch must be specified")};

fs.watch(filename, function(){
    let 
    ls = spawn('cmd', ['/s', filename])
,   output = '';

    ls.stdout.on('data', function(chunk){
        output += chunk.toString();
    });

    ls.on('close', function(){
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});
console.log("Now watching " + filename + " for changes..."); */
