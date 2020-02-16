let mc = require("mongodb").MongoClient;
let url = "mongodb://localhost";

mc.connect(url, 
function(err, client){
    if(err) console.log(err.stack);
    var human = {name: "Swyatagorishe", age: 130};
    let db = client.db('sandbox');
    db.collection('humans').insertOne(human,
        function(error, response){
            if (error) 
            	console.log("Error insert");
            else
            	console.log("inserted record", response.ops[0]);
        });
    client.close();
});