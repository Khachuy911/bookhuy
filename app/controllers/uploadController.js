const asyncHandle = require("../../middlewares/asyncHandle");

module.exports = {
  index: asyncHandle((req, res, next) => {
    res.render("upload.ejs");
  }),
	upload: asyncHandle((req,res,next)=>{
		try {
			res.send('Successfuly');
		} catch (error) {
			res.redirect('/upload/');
		}
	})
};

