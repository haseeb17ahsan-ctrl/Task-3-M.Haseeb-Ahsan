const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Enter458",
    database: "student_db"
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed", err);
    } else {
        console.log("Database Connected");
    }
});

module.exports = connection;