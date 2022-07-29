const express = require("express");
const app = express();

const homeRoute = require("./routes/homeRoute");
app.use(homeRoute);

app.listen(3000, () => {
  console.log("Server is up and running");
});