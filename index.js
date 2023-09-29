const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`API server running on port ${process.env.PORT || 3001}!`);
    });
});