const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apinode'
});

connection.connect(err => {
    if (err) throw err;
    console.log('MySQL conectado!');
});

module.exports = connection;