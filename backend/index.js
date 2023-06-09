require('dotenv').config();

const express = require('express');
const { connection } = require('./db.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Defining the app
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Requiring the routers
const authRouter = require('./routes/authRoute');
const contactusRouter = require('./routes/contactusRoute');

// Middlewares for setting the routers
app.use('/', authRouter);
app.use('/', contactusRouter);

// Getting the port from the environment variables
const PORT = process.env.PORT;

// Starting the server
app.listen(PORT, () => {
    console.log("Server is running");
});

app.get('/', (req, res) => {
    res.send("Hello");
});

// Establishing the connection with the database
connection();