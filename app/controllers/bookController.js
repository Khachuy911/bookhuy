const Book = require("../models/book");

const asyncHandle = require("../../middlewares/asyncHandle");

module.exports = {
  index: asyncHandle(async (req, res, next) => {
    const book = await Book.find({});
    res.render("home.ejs", { book });
  }),

  detailBook: asyncHandle((req, res) => {
    Book.findById(req.params.id).then((book) => {
      res.render("bookDetail.ejs", { book });
    });
  }),
};
