const Users = require("../app/models/users.js");
const jwt = require("jsonwebtoken");
module.exports = {
  authutication: (req, res, next) => {
    if (!req.cookies.token) {
      res.redirect("/user/login");
      return;
    }
    next();
  },
  checkauth:async (req, res, next) => {
    let error = [];
    const {email,password} = req.body;
     const user= await Users.findOne({email})
      if(!user){
        error.push("Email Wrong !");
      }else if(user.password !== password){
        error.push("Password Wrong !");
      }
      if (error.length) {
          res.render('login.ejs',{loi:error})
          return;
      }
      let id = user._id;
      let token = jwt.sign({id},"09112001")
      res.cookie("token",token)
      next();
  },
};
