const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const serve = require("express-static");
const config = require("./utils/config/index");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

config.dbConfig(config.cfg, (error) => {
  if (error) {
    return;
  }

  // load external modules
  // const express = require("express");
  // var responseTime = require("response-time");

  // app.use(compression())

  // app.use(responseTime());

  // config.expressConfig(app);

  // attach the routes to the app
  require("./lib/route")(app);

  app.use(serve("./uploads"));

  //   createCMSAdmin();

  app.listen(config.cfg.port, () => {
    console.log(
      `Express server listening on http://localhost:${config.cfg.port}`
    );
  });
});

app.get("/", (req, res) => {
  try {
    res.status(200).json({ Message: "Backend is working" });
  } catch (error) {
    console.log("error: ", error);
  }
});
