const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`API server running on port ${process.env.PORT || 3001}!`);
    });
});