//console.log(getCurrentDateTime());
//console.log(JSON.stringify(getFakeUser()));



function getCurrentDateTime() {
    var date = new Date();
    var dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    return dateString;
}

//function writeMessage(message) {
//    console.log(message + " : " + getCurrentDateTime());
//}

function getFakeUser() {
    return user = {
        name: getFakeString() + " " + getFakeString(),
        designation: getFakeString() + " " + getFakeString(),
        email: getFakeString() + "@email.com",
        mobile: getFakeNumber(),
        telephoneNumber: getFakeNumber(),
        thumbnailPhoto: "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"
    };
}

function getFakeString() {
    var fakeString = "";
    var possibleCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    fakeString += possibleCaps.charAt(Math.floor(Math.random() * possibleCaps.length));
    for (var i = 0; i < 10; i++) {
        fakeString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return fakeString;
}

function getFakeNumber() {
    var fakeNumber = "";
    var possible = "1234567890";
    for (var i = 0; i < 10; i++) {
        fakeNumber += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return fakeNumber;
}

module.exports = {
    getFakeUser: getFakeUser,
    getCurrentDateTime: getCurrentDateTime,
    
}