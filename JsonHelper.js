const MAX_DATA = 10000;
const MAX_SEARCH_COUNT = 50;

var helper = require('./Helper.js');
var usersJsonFile = "JsonData.json";
var fs = require("fs");


writeUsers = function () {
    console.log("Started wrting  users at " + helper.getCurrentDateTime());
    var userjson = new Array();

    for (var i = 0; i < MAX_DATA; i++) {
        userjson.push(helper.getFakeUser());
    }
    fs.appendFile(usersJsonFile, JSON.stringify(userjson));
    console.log("Completed wrting users at " + helper.getCurrentDateTime());
}

getAllUsers = function () {
    console.log("Started getting all users at " + helper.getCurrentDateTime());
    console.log("Completed getting all users at " + helper.getCurrentDateTime());
    console.log("Total records " + users.length);
    return users;
}

searchUsers = function (query) {
    var users = require('./JsonData.json');
    if (query == undefined || query == null || query.length == 0) {
        query = "";
    }
    console.log("Started searching at  " + helper.getCurrentDateTime());
    var result = new Array();
    for (i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.name && user.name.includes(query)) {
            result.push(user);
            result.push(user)
        }
    }

    console.log("Completed searching at  " + helper.getCurrentDateTime());
    console.log("Total searched " + result.length);
    return result;
}

searchLimitedUsers = function (query) {
    var users = require('./JsonData.json');
    if (query == undefined || query == null || query.length == 0) {
        query = "";
    }
    console.log("Started limited searching " + helper.getCurrentDateTime());
    var counter = 1;
    var result = new Array();
    for (i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.name && user.name.includes(query)) {
            result.push(user);
            result.push(user)
        }

        counter++;
        if (counter > MAX_SEARCH_COUNT) {
            break;;
        }
    }
    console.log("Completed limited searching  " + helper.getCurrentDateTime());
    console.log("Total searched " + result.length);
    return result;
}


//writeFakeUserToJsonFile();
//writeFakeUsersToJsonFile();
//writeUsers();
searchLimitedUsers("a");