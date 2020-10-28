const express = require("express");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(process.env.port || 5000, function () {
  console.log("node is working");
});
app.use("/", require("./routes/Financial-route"));
