const MAX_DATA = 50000;
const MAX_SEARCH_COUNT = 50;
var helper = require('./Helper.js');


var Datastore = require('nedb'), db = new Datastore({ filename: 'netDB' });
db.loadDatabase(function (err) {    // Callback is optional
    if (err) { console.log("Err - load db" + err); }
    console.log("db connected");
});

writeUsers = function () {

    console.log("Started wrting  users at " + helper.getCurrentDateTime());
    var userjson = new Array();

    for (var i = 1; i < MAX_DATA; i++) {
        console.log("inserting " + i);
        var user = helper.getFakeUser();
        db.insert(user, function (err, newdoc) {
            if (err) { console.log("err - insert db" + err); }
        });
    }
    console.log("Completed wrting users at " + helper.getCurrentDateTime());
}

getAllUsers = function () {
    return new Promise(function (resolve, reject) {      
        console.log("Started searching at  " + helper.getCurrentDateTime());
        db.find({ }).exec(function (err, docs) {
            if (err) {
                reject(err);
            }
            else {
                console.log("Completed searching at  " + helper.getCurrentDateTime());
                resolve(docs);
            }
        });
    });
}

searchUsers = function (query) {
    return new Promise(function (resolve, reject) {
        if (query == undefined || query == null || query.length == 0) {
            query = "";
        }
        console.log("Started searching at  " + helper.getCurrentDateTime());
        db.find({ name: /ma/i }).exec(function (err, docs) {
            if (err) {
                reject(err);
            }
            else {
                console.log("Completed searching at  " + helper.getCurrentDateTime());
                resolve(docs);
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
        db.find({ name: /ma/i }).limit(MAX_SEARCH_COUNT).exec(function (err, docs) {
            if (err) {
                reject(err);
            }
            else {
                console.log("Completed searching at  " + helper.getCurrentDateTime());
                resolve(docs);
            }
        });
    });
}



//writeUsers();
//console.log("data - " + JSON.stringify(getAllUsers()));
//searchUsers();
getAllUsers()
    .then(function (fulfilled) {
        console.log("fulfilled " + fulfilled.length);
    })
    .catch(function (error) {
        console.log("Rejecte " + error.message);
    });;