require('dotenv').config();
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Connect Database
var conn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
    database : process.env.DB_NAME,
    multipleStatements: true
});
module.exports = {
    // Campaigne List Function (API)
    CampaigneList: (req, res) => {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            // 'SELECT * FROM campaign LEFT JOIN user ON user.id = campaign.user_id'
            conn.query("SELECT * FROM campaign LEFT JOIN user ON user.id = campaign.user_id", function (err, response, fields) {
            if(response == ''){
                return res.json({
                "results": "false",
                "code":200,
                "message":"no any record found!"
                });
            }else{
                const arr = response;
                return res.json({
                    "results": "true",
                    "code":200,
                    "message":"",
                    'data': response,
                    });
            }
            });
        });
    },
    ViewCampaigneDetails: (req, res) => {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            var campaignId = req.body.userData.campaigne_id;
            var userId = req.body.userData.user_id;
            var sql = "SELECT * FROM campaign WHERE campaign_id = '" + campaignId+ "';SELECT * FROM user_interest WHERE campaign_id = '" + campaignId+ "' ORDER BY id ASC;SELECT * FROM google_sitelinks WHERE campaign_id = '" + campaignId+ "' ORDER BY id ASC;SELECT * FROM user WHERE id = '"+userId+"'";
            conn.query(sql, [1, 2, 3,4], function(error, results, fields) {
                if (error) {
                    throw error;
                }
                return res.send({
                    "results": "true",
                    "code":200,
                    "message":"campaigne list",
                    'data': results[0],interest:results[1],sitelink:results[2],userData:results[3],
                });
            });
        });
    },
};