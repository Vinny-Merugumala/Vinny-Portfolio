require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on ${process.env.SERVER_PORT}`)
);
