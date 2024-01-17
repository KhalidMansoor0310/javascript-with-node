const { configDotenv } = require("dotenv");
configDotenv();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.status(200).send({
    name: "khalid",
    name2: "tauseef",
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is the port you are listening at !`);
});
