// import express dan router
const express = require("express");
const router = require("../routes/api.js");

// import dotenv dan menjalankan method config
require("dotenv").config();

// destructing object process.env
const { APP_PORT } = process.env;

const router = require("./routes/api");
app.use(router);

// membuat object express
const app = express();

// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
