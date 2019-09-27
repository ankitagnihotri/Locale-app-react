var mysql = require("mysql");

console.log("ReST");
function REST_ROUTER(router, connection) {
  var self = this;
  self.handleRoutes(router, connection);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection) {
  router.get("/", function(req, res) {
    console.log("Inside get");
    res.json({ Message: "Hello World !" });
  });

  router.get("/rideinfo", function(req, res) {
    var query = "SELECT from_lat, to_lat, from_long, to_long FROM ??";
    var table = ["RIDE_INFO"];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      if (err) {
        res.json({ Error: true, Message: "Error executing MySQL query" });
      } else {
        res.json({ Error: false, Message: "Success", rides: rows });
      }
    });
    });
};

module.exports = REST_ROUTER;
