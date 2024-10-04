const v1Route = require("../module/v1/route");
// const responseHandler = require("../responseHandler");

module.exports = function (app) {
  // Attach V1 Routes
  app.use("/api/v1", v1Route);
//   app.use(responseHandler.handleError);
};
