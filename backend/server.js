const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')

// allows us to have environment variables in the .env file
require('dotenv').config();

// begin middleware
const app = express();
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())


//  end middleware

const uri = process.env.ATLAS_URI
// useNewUrlParser allows us to use urls for requests, and create index, is related to deprication as well.
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

// 9A. add routes and use them
    const exercisesRouter = require('./routes/exercises');
    const usersRouter = require('./routes/users')

    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);


// end add models

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

// now lets create the models folder