var sql = require('../node_modules/mssql');
var connect = function () {
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: '1',
        server: 'HUNGVUONG-PC',
        database: 'ThucTap_HMTT'
    });

    return conn;
}

module.exports = connect;