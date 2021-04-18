const jwt = require("jsonwebtoken");

const user = {
  name: "hung",
  pass: "12345",
  role: "admin",
};
const secret = "123456789";

const token = jwt.sign(user, secret);
const payload = jwt.verify(token, "123456789");

console.log(token);

console.log(payload);

