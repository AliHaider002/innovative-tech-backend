"use strict";

//=================================== Load Modules start ===================================

//=================================== Load external modules=================================
const mongoose = require("mongoose");
//Import logger
const bcrypt = require("bcrypt");
// plugin bluebird promise in mongoose
// mongoose.Promise = require("bluebird");

//=================================== Load Modules end =====================================

// Connect to Db
function connectDb(env, callback) {
  mongoose.set("strictQuery", true);
  let dbName = env.mongo.dbName;
  let dbUrl = env.mongo.dbUrl;
  let dbOptions = env.mongo.options;

  mongoose.connect(dbUrl + dbName, dbOptions);

  // CONNECTION EVENTS
  // When successfully connected

  mongoose.connection.on("connected", function () {
    callback();
  });

  // If the connection throws an error
  mongoose.connection.on("error", function (error) {
    callback(error);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function () {
    callback("DB connection disconnected.");
  });
}

// ========================== Export Module Start ==========================
module.exports = { connectDb, CONNECTION: mongoose.connection };
// ========================== Export Module End ============================
