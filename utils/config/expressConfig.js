bodyParser = require("body-parser"); // parses information from POST

/**
 * add swagger to our project
 */
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../../swagger.json");

module.exports = function (app, env) {
  // parses application/json bodies
  app.use(bodyParser.json());
  // parses application/x-www-form-urlencoded bodies
  // use queryString lib to parse urlencoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));
  /**
   * add swagger to our project
   */

  app.use("/docs/v1", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  /*
   * all api request
   */
  app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Credentials", true);
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken"
    );
    response.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
};
