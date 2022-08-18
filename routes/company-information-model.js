const { default: mongoose } = require("mongoose");
// const slug = require("mongoose-slug-generator");
// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const CompanyNews = new Schema(
  {
    // newID : String,
    title : String,
    description : String,
    imgCDN : String
  }
);

module.exports = mongoose.model("CompanyInformationNews", CompanyNews);
// module.exports = mongoose.model("CompanyInformationNews", CompanyNews);
