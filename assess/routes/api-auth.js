const fs = require('fs');

module.exports = function(app, path){
    var users = [
	    fs.readFile('users.json', (error, data) =>{
	        if(error) throw error;
	        users = JSON.parse(data);
	        console.log(users)
	    })
    ]

    app.post('/api/auth', function(req, res){
        if(!req.body){
            return res.sendStatus(400)
        }
    
        var use = {}
        use.username = ""
        use.email = ""
        use.role = ""
        use.groups = []
        use.adminlist = []
        use.valid = false

        for(i = 0; i<users.length; i++){
            if(req.body.email === users[i].email && req.body.password === users[i].password){
                use.username = users[i].username
                use.email = users[i].email
                use.role = users[i].role
                use.groups = users[i].groups
                use.adminlist = user[i].adminlist
                use.valid = true
            }
        }
        res.send(use);
    });
}