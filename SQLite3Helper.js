const MAX_DATA = 10000;
const MAX_SEARCH_COUNT = 50;
const dbName = "SQLite3DB.db";
const userTable = "user";
var helper = require('./Helper.js');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the " + dbName + "SQlite database.");
});


initializeDB();

function initializeDB() {
    //db.run("DROP TABLE " +  userTable + " IF EXISTS");  
    db.run("CREATE TABLE if not exists " + userTable + " (name TEXT, designation TEXT, email TEXT, mobile TEXT, telephoneNumber TEXT, thumbnailPhoto TEXT)");
}

//function closeDB() {
//    db.close((err) => {
//        if (err) {
//            return console.error(err.message);
//        }
//        console.log('Close the database connection.');
//    });
//}

writeUser = function (counter) {
    return new Promise(function (resolve, reject) {
        var user = helper.getFakeUser();
        db.run("INSERT INTO " + userTable + " VALUES (?,?,?,?,?,?)", user.name, user.designation, user.email, user.mobile, user.telephoneNumber, user.thumbnailPhoto, function (err) {
            if (err) {
                reject(err)
            }
            else {
                console.log("writing  " + counter);
                resolve("Inserted ");
            }
        });
    });
}

writeUsers = function () {
    return new Promise(function (resolve, reject) {
        var startTime = helper.getCurrentDateTime();
        console.log("Started writing  user at " + startTime);
        for (var i = 0; i < MAX_DATA; i++) {
            this.writeUser(i)
                .then(function () {
                    //console.log("writing  " + i);
                })
                .catch(function () {
                });
        }
        console.log("Completed writing  at " + helper.getCurrentDateTime());
        resolve(i);
    });
}

getAllUsers = function () {
    return this.searchUsers();
}

searchUsers = function (query) {
    return new Promise(function (resolve, reject) {
        if (query == undefined || query == null || query.length == 0) {
            query = "";
        }
        console.log("Started searching at  " + helper.getCurrentDateTime());
        var users = new Array();
        var sql = "SELECT * FROM " + userTable + " WHERE name LIKE '% " + query + "%'";
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log("Err - getAllUsers()");
                reject(err);
            }
            else {
                rows.forEach((row) => {
                    var user = {
                        name: row.name,
                        designation: row.designation,
                        email: row.email,
                        mobile: row.mobile,
                        telephoneNumber: row.telephoneNumber,
                        thumbnailPhoto: row.thumbnailPhoto
                    }
                    users.push(user);
                });
                console.log("Completed getting all users at " + helper.getCurrentDateTime());
                console.log("Total records " + users.length);
                resolve(users);
            }
        });
    });
}

searchLimitedUsers = function (query) {
    return new Promise(function (resolve, reject) {
        if (query == undefined || query == null || query.length == 0) {
            query = "";
        }
        console.log("Started searching at  " + helper.getCurrentDateTime());
        var users = new Array();
        var sql = "SELECT * FROM " + userTable + " WHERE name LIKE '% " + query + "%' LIMIT " + MAX_SEARCH_COUNT;
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log("Err - getAllUsers()");
                reject(err);
            }
            else {
                rows.forEach((row) => {
                    var user = {
                        name: row.name,
                        designation: row.designation,
                        email: row.email,
                        mobile: row.mobile,
                        telephoneNumber: row.telephoneNumber,
                        thumbnailPhoto: row.thumbnailPhoto
                    }
                    users.push(user);
                });
                console.log("Completed getting all users at " + helper.getCurrentDateTime());
                console.log("Total records " + users.length);
                resolve(users);
            }
        });
    });
}


//writeUsers()
//    .then(function (fulfilled) {
//        console.log("writtign completed ");
//    })
//    .catch(function (error) {
//        console.log("writting Rejecte " + error.message);
//    });;

getAllUsers()
    .then(function (fulfilled) {
        console.log("fulfilled " + fulfilled.length);
    })
    .catch(function (error) {
        console.log("Rejecte " + error.message);
    });;

