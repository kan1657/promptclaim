const mysql = require('mysql2');

const config = {
    setup: {
        host     : 'localhost',
        user     : 'root',
        password : 'Klodkup340',
        database : 'promptclaim',
        port: 3306
    }
};
// connect to mysql
const db = mysql.createPool(config.setup).promise();

module.exports = db;