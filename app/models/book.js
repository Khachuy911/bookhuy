const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const book = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name book is invalid"],
      unique: true,
    },
    description: String,
    price: String,
    author: String,
    image: String,
    slug: String,
  },
  {
    timestamps: true,
  }
);
book.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});
module.exports = mongoose.model("book", book, "book");
