const Book = require("../models/book");
const asyncHandle = require("../../middlewares/asyncHandle");

module.exports = {
  //GET / My Book
  index: asyncHandle((req, res) => {
    Book.find({}).then((book) => {
      res.render("myBook.ejs", { book });
    });
  }),
  //GET / update
  update: asyncHandle((req, res) => {
    Book.findById(req.params.id).then((book) => {
      res.render("update.ejs", { book });
    });
  }),
  //PUT / load update
  loadUpdate: asyncHandle(async(req, res) => {
    const { id, ...value } = req.body;
		await Book.findByIdAndUpdate(id, value);
		res.redirect('/me/myBook')
	}),
  //DELETE / load delete
  loadDelete: asyncHandle(async(req, res) => {
    Book.delete({ _id : req.params.id})
      .then(() => res.redirect("back"))
      .catch(() => {
        console.log("error");
      });
  }),
  //DELETE / forever delete
  loadDeleteForever: asyncHandle(async(req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.redirect("back"))
      .catch(() => {
        console.log("error");
      });
  }),
  //GET/ create
  create: asyncHandle(async(req, res) => {
    res.render("create.ejs");
  }),
  //POST / load create
  loadCreate: asyncHandle(async (req, res) => {    
    const book = req.body;
    await Book.create(book);
    res.redirect("/me/myBook");
  }),
  //GET / bin book
  binDelete: asyncHandle(async (req,res)=>{
    Book.findDeleted({}).then((book) => {
      res.render("binBook.ejs", { book });
    });
  }),

  restore: asyncHandle(async(req, res) => {
    Book.restore({_id: req.params.id}).
    then((book) => {
      res.redirect('/me/mybook')
    });
  }),
};