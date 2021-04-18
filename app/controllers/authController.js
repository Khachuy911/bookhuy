const Book = require("../models/book");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
module.exports = {
  //GET / login
  login: (req, res) => {
    res.render("login.ejs",{loi:0})
  },
  //POST / login
  loadLogin: (req, res) => {
    res.cookie("useId", "12345");
    res.redirect("/");
  },
  // GET / create account
  createAccount : async(req,res)=>{
    res.render("createAccount.ejs");
  },
  //POST / create account
  loadCreateAccount: async (req,res)=>{
    let user = req.body;
    User.create(user);
    res.redirect('/user/login')
  },
  //GET / myself
  myself: async(req,res)=>{
    let token = req.cookies.token;
    let payload = jwt.verify(token,"09112001");
    await User.findById(payload.id)
      .then(user=>{
        res.render('myself.ejs',{user:user})
      })
    
  }
};
