require("dotenv").config();

const express = require('express');
const cors = require('cors');

const connectToDB = require('./config/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

connectToDB();

const userRoutes = require("./routes/userRoutes");

app.use(userRoutes);

module.exports = app;