const connection = require("../modules/mysql")

module.exports.penz = function (callback) {
    myQuery = `SELECT money FROM users WHERE gamer="rekalaca";`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}