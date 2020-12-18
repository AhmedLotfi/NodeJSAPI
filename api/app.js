const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const postsRouter = require('./routes/post');
const {
    getPosts
} = require('./routes/post');

const app = express();
dotenv.config();

//db 
//MONGODB_RUI=mongodb://localhost/nodejsapi

mongoose.connect(process.env.MONGODB_RUI, {
    useNewUrlParser: true
}).then(_ => {
    console.log('DB Connected!!');
});

mongoose.connection.on('error', error => {
    console.log(error);
});


// middlewares 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postsRouter)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Node API Server Listening to port ${port}`);
});