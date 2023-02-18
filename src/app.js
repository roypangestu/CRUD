const express = require("express");
const app = express();
const userRoute = require("./routers/userRouter");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());

app.use("/users", userRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port ${process.env.APP_PORT}...`);
});
