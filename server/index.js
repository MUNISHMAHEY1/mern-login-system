require('dotenv').config(); // needed for using .env file
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT;
const database = process.env.DATABASE;

mongoose.connect(database, {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true,})
        .then(() => console.log("Database Connected!"))
        .catch(err => console.log(err));

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});