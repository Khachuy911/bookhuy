const express = require("express");
const router = express.Router();

const bookController = require("../app/controllers/bookController");

router.get("/:id/detailBook", bookController.detailBook);
router.get("/", bookController.index);

module.exports = router;
