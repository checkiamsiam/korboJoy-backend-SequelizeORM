const mysql = require('mysql');
var conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

conn.connect(function (err) {
    if (err) throw err
    console.log("Database connected success");
})

module.exports = conn;