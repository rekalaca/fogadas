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