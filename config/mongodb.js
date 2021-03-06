let mongoose = require('mongoose');
require("dotenv").config();

const CONNECT = process.env.MONGO_DB_URI;

mongoose.connect(CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String(),
    user: String(),
    password: String()
})

const usersModel = mongoose.model('user', usersSchema) 

module.exports = { usersModel }

