const bookRouter = require("./book.js");
const meRouter = require("./me.js");
const authRouter = require("./auth.js");
const uploadRouter = require("./upload.js");

const auth = require("../middlewares/auth");

const errorHandle = require("../middlewares/errorHandle");

function router(app) {
  app.use("/user",authRouter);
  app.use("/me",auth.authutication,meRouter);
  app.use("/upload",auth.authutication,uploadRouter);
  app.use("/", auth.authutication,bookRouter);

  app.use(errorHandle);
}

module.exports = router;
