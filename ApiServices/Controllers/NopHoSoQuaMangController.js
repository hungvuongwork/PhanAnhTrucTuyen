var express = require('express');
var router = express.Router();
var sql = require('mssql');
var conn = require("../Connection/connect")();

var routes = function () {
    router.route('/ThuTuc_DanhSach_GetList')
        .get(function (req, res) {
            conn.connect().then(function() {
                var sqlQuery = `
                    select  ThuTuc_LinhVuc.TenLinhVuc,
                            ThuTuc_DanhSach.TenThuTuc
                    from    ThuTuc_DanhSach 
                    inner join ThuTuc_LinhVuc on ThuTuc_LinhVuc.ID = ThuTuc_DanhSach.ID_ThuTuc_LinhVuc
                `;

                var req = new sql.Request(conn);
               
                req.query(sqlQuery).then(function (recordsets) {
                    res.json(recordsets.recordset);
                    conn.close();
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while reading data");
                });
                
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while reading data");
            });
        });

    return router;
};

module.exports = routes;