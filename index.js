const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.set('view engine', 'ejs');

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    phoneNumber: Number,
})

const Child = mongoose.model('Child', {
    firstName: String,
    lastName: String,
    gender: String
})

app.get('/', (req, res) => {
    res.send({ message: 'Everything is working fine!' })
})

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log(`Server running on http://localhost:${process.env.PORT}`))
        .catch((error) => console.log(error))
})




































/*
    MERN: 
    - M: MongoDB
    - E: Express
    - R: React.js
    - N: Node.js

    DB: Database (Permanent Storage)
    - Relational (SQL) 
        - Tables & Rows
        - This is used when the structure/schema is defined
        - Eg: MySQL, PostgreSQL, etc
    - Non-Relational (No-SQL) 
        - Collections & Documents
        - This is used when the structure/schema is unclear
        - Eg: MongoDB, AWS DynamoDB

    Driver:
    - Mongoose: ODM (Object Data Modeling) for MongoDB
*/