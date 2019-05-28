var express = require('express');
var router = express.Router();
var sql = require('mssql');
var conn = require("../Connection/connect")();

var routes = function () {
    router.route('/DangNhap')
        .post(function (req, res) {
            conn.connect().then(function () {
                var trans = new sql.Transaction(conn);
                trans.begin().then(function () {
                    var request = new sql.Request(trans);
                    request.input("TenDangNhap", sql.NVarChar(1024), req.body.TenDangNhap);
                    request.input("MatKhau", sql.NVarChar(1024), req.body.MatKhau);
                    request.execute("sp_NguoiDung_Login").then(function (recordsets) {
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
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while reading data");
            });
        });
    router.route('/DangKy')
        .post(function (req, res) {
            conn.connect().then(function () {
                var trans = new sql.Transaction(conn);
                trans.begin().then(function () {
                    var request = new sql.Request(trans);
                    request.input("TenHienThi", sql.NVarChar(1024), req.body.TenHienThi);
                    request.input("TenDangNhap", sql.VarChar(1024), req.body.TenDangNhap);
                    request.input("MatKhau", sql.NVarChar(9999), req.body.MatKhau);
                    request.input("SoCMND", sql.Int, req.body.SoCMND);
                    request.input("SoDT", sql.VarChar(20), req.body.SoDT);
                    request.input("ID_LoaiTaiKhoan", sql.Int, req.body.ID_LoaiTaiKhoan);
                    request.input("ID_ThuTuc_LinhVuc", sql.Int, req.body.ID_ThuTuc_LinhVuc);
                    request.execute("sp_NguoiDung_Register").then(function (result) {
                        trans.commit().then(function () {
                            conn.close();
                            res.status(200).send(result.recordset);
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while inserting data");
                        });
                    }).catch(function (err) {
                        conn.close();
                        res.status(400).send("Error while inserting data");
                    });
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while inserting data");
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
            });
        });

    router.route('/GetListById/:id')
        .get(function(req, res) {
            conn.connect().then(function() {
                var id = req.params.id;
                var sqlQuery = `
                    select  TenHienThi,
                            SoCMND,
                            SoDT              
                    from NguoiDung 
                    where ID = ${id}
                `;

                var request = new sql.Request(conn);

                request.query(sqlQuery).then(function (recordsets) {
                    res.json(recordsets.recordset);
                    conn.close();
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while reading data");
                });
            });
        });
    return router;
}

module.exports = routes;