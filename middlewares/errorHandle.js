const errorResponse = require("../helpers/errorResponse");

const errorHandle = (err,req,res,next)=>{
	console.log("Da bat loi: "+ err.name);
	let error = {...err};


	if(err.name ==="ValidationError"){
		const message = Object.values(err.errors).map(messa => messa.message);
		error = new errorResponse(400,message);
	}
	if(err.code ===11000){
		const message = "information already exists";
		error = new errorResponse(400,message);
	}
	if(err.name ==="CastError"){
		const message = "not found link";
		error = new errorResponse(400,message);
	}
	res.status(error.statusCode).json({
		err:1,
		success:false,
		data:error.message
	})


}


module.exports = errorHandle;
