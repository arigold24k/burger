// Set up MySQL connection.
var mysql = require("mysql");

var connection;
// if(process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection({

        // process.env.JAWSDB_URL
        host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "k6epo670wn4hjjn1",
        password: "d68jkp8cyrm20zke",
        database: "u0r1rawi1v1zmvs7"


    });
// } else {
//     //local host
//     connection = mysql.createConnection({
//         port: 3306,
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "burgers_db"
//     });
// }

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});





// Export connection for our ORM to use.
module.exports = connection;