const mysql = require('mysql');
const data = require('../data/config.json');
const connection = mysql.createConnection({

  host: data.dbhost,
  database: data.dbname,
  user: data.dbuser,
  password: data.dbpasswd,
  port: data.dbport
});

connection.connect((err) => {
  if (err) throw err;
  console.log("A csatlakozás létrejött!");
});

const vagyon = (callback) => {
  const mySelect =
    `SELECT money FROM users WHERE gamer="rekalaca";`;
  connection.query(mySelect, (err, result) => {
    if (err) callback(err, null);
    callback(null, JSON.parse(JSON.stringify(result)));
  });
};



module.exports = {vagyon};


