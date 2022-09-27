const mysql = require('mysql');
require('dotenv').config();
const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env

const db = mysql.createConnection({
    host : MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
})

db.connect((err) => {
    if (err){
        console.log("err", err)
    } console.log('DB connected')
})
