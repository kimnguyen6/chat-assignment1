var fs = require('fs');
    module.exports = function(app, path) {
        fs.readFile('users.json', function(err, data){
            if (err) throw err;
            let userArray = JSON.parse(data);
            arrJson = JSON.stringify(userArray);
            /*fs.writeFile('users.json', arrJson, 'utf-8', function(err){
                if (err) throw err;
                path.send(userArray)
            })*/
            console.log(userArray)
            console.log(arrJson)
        });
    }