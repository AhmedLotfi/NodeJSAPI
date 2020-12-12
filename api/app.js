const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postsRouter = require('./routes/post');
const {
    getPosts
} = require('./routes/post');

const app = express();
dotenv.config();

//db 
mongoose.connect(process.env.MONGODB_RUI).then(_ => {
    console.log('DB Connected!!');
});

mongoose.connection.on('error', error => {
    console.log(error);
});


// middlewares 
app.use(morgan("dev"));
app.use('/', postsRouter)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Node API Server Listening to port ${port}`);
});