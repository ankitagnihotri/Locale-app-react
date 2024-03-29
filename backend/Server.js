var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var bodyParser = require("body-parser");
var rest = require("./REST.js");
var app = express();
app.options("*", cors());
app.use(cors());

function REST() {
  var self = this;
  self.connectMysql();
}

REST.prototype.connectMysql = function() {
  var self = this;
  var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "Akt@1992",
    database: "LOCALE_ASSIGN",
    debug: false
  });
  pool.getConnection(function(err, connection) {
    if (err) {
      self.stop(err);
    } else {
      self.configureExpress(connection);
    }
  });
};

REST.prototype.configureExpress = function(connection) {
  var self = this;
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var router = express.Router();
  app.use("/api", router);
  var rest_router = new rest(router, connection);
  self.startServer();
};

REST.prototype.startServer = function() {
  app.listen(8080, function() {
    console.log("All right ! I am alive at Port 8080.");
  });
};

REST.prototype.stop = function(err) {
  console.log("ISSUE WITH MYSQL \n" + err);
  process.exit(1);
};

new REST();
