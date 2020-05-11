require('dotenv').config(); // needed for using .env file
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/UserRoute');
const config = require('./config/key');

mongoose.connect(config.mongoURI, {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true,})
        .then(() => console.log("Database Connected!"))
        .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use('/api/users', userRouter);

app.listen(config.PORT, () => {
    console.log(`Server running at ${config.PORT}`);
});