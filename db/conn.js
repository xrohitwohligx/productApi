const mongoose = require("mongoose");

const connectDB = (uri) =>{
    console.log("connectDB");
    return mongoose.connect(uri)
}

module.exports = connectDB;