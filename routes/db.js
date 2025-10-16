var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql12.freesqldatabase.com',
  user     : 'sql12803309',
  password : '9Tii6E4KJe',
  database : 'sql12803309',
  port: 3306, 
  multipleStatements: true

});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err);
  } else {
    console.log('✅ Connected to FreeSQLDatabase successfully!');
  }
});

module.exports = connection;