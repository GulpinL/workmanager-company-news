// const User = require("../models/userModel");
// const { mongooseToObject } = require("../services/util/mongoose");
// const  authenticationService  = require("../services/authenticationService");
// const  userService  = require("../services/userService");

// const mongoose = require("mongoose");
const CompanyNews = require("./company-information-model");
// const Food = require("./foodModel");
// mongoose.connect("mongodb://localhost/testdb")

class CompanyInformation {
//     render_company_list_information = async (req, res, next) =>{
    
//         const CompanyNews =await CompanyNew.find({}).lean();
//         res.json(CompanyNews);
//         // if (req.user) {
//     //   let user =req.user;
//     //   // console.log("THONG TIN CUA SUER LA : ",user);
//     //   res.render("userLogined/userProfile",{user});
//     // } else {
//     //   res.redirect("/authentication/login");
//     // }

//         res.send("long dep trai nhat company");
//   }

//     post_new_company_information = async (req, res, next) =>{
//         const CompanyNews =await CompanyNew.create({
//             newID:"firstID01",
//             title: "Foundation of company",
//             description: "The first company and how it remain to these day",
//             imgCDN:"img_URL"
//         })
//         res.json(CompanyNews);
//         res.send("long dep trai nhat company");
//   }

//     test_mongoose = async (req, res, next) =>{
//         const CompanyNews = new CompanyNew({
//             // newID:"firstID01",
//             title: "Foundation of company",
//             description: "The first company and how it remain to these day",
//             imgCDN:"img_URL"
//         })
//         await CompanyNews.save()
//         console.log(CompanyNews)
//         // res.json(CompanyNews);
//   }

    get_company_list_information_api = async (req, res, next) =>{
        try {
            const CompanyNewsList = await  CompanyNews.find({}).lean();
            console.log(CompanyNewsList)
            res.json(CompanyNewsList)

        } catch(err){
            res.status(500).json({message: err.message});
        }
  }

    post_company_list_information_api = async (req, res, next) =>{
        // DO STH
        const CompanySingleNews =new CompanyNews({
            title: "Foundation of company testing create",
            description: "The first company and how itesting CREATEt remain to these day",
            imgCDN:"img_URL CREATE"
        })
        //         res.json(CompanyNews);
        try {
            const NewCompanyNewsList = await  CompanySingleNews.save()
            // console.log(NewCompanyNewsList)
            // res.json(CompanySingleNews)

        } catch(err){
            res.status(500).json({message: err.message});
        }
  }


    test_get_mongoose = async (req, res, next) =>{
        // res.send('deo dc')
        try {
            const CompanyNewsList = await  CompanyNews.find({}).lean();
            // const CompanyNewsList = await  CompanyNews.find();
            console.log(CompanyNewsList)
            res.json(CompanyNewsList)
        } catch(err){
            res.status(500).json({message: err.message});
        }
  }

    test_get_mongoose_food = async (req, res, next) =>{
        try {
            // const foods  =await foodService.getFoodsByFoodPerPage(currentPage,numberFoodPerPage);
            const foods = await Food.find({}).lean();
            res.json(foods)
        } catch(err){
            res.status(500).json({message: err.message});
        }
  }


}



module.exports = new CompanyInformation();