const { connectDb: dbConfig } = require("./dbConfig");
const expressConfig = require("./expressConfig");

require("dotenv").config();
// =================================================================
var cfg = {
  port: process.env.PORT,

  mongo: {
    dbName: process.env.DB_NAME,
    dbUrl: process.env.DB_URL,
    options: {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    },
  },

  // admin: {
  //   name: process.env.ADMIN_NAME,
  //   email: process.env.ADMIN_EMAIL,
  //   password: process.env.ADMIN_PASSWORD,
  // },

  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },

  basicRole: ["company", "client"],
};

// ========================== Export Module Start ==========================
module.exports = {
  cfg,
  dbConfig,
  expressConfig,
};
// ========================== Export Module End ============================
