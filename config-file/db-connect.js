// mongodb+srv://tranhalong:dyTQgSHMddFn5xQw@cluster-workmanager-pro.egas8bj.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");

function connect() {
  
    console.log(process.env.MONGODB_URL_2);
    mongoose.connect(process.env.MONGODB_URL_2, {
  
    // console.log(process.env.MONGODB_URL);
    // mongoose.connect(process.env.MONGODB_URL, {
  
    // console.log(process.env.MONGODB_URL_FOOD_PJ);
    // mongoose.connect(process.env.MONGODB_URL_FOOD_PJ, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  
}

module.exports = { connect };