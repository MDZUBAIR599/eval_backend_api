const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/Database.js");
const app = express();
require("dotenv").config();
const bcrypt = require("bcrypt");
const { Authmodel } = require("./Models/Auth.model.js");
const { Todorouter } = require("./Routers/Todo_crud.js");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9000;
app.use("/todos", Todorouter)
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const isuser = await Auth_model.findOne({ email: email });
  if (isuser) {
    res.send({"msg":"try login"});
  }
  else{
  bcrypt.hash(password, 5, async function (err, hashedpas) {
    if (err) {
      res.send({ msg: "something went wrong" });
    }
    const newuser = new Authmodel({
      username,
      email,
      password: hashedpas,
    });

    try {
      await newuser.save();
      res.send({ msg: "signup sucessfull" });
    } catch (err) {
      res.send({ msg: "error in signup" });
    }
  });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Authmodel.findOne({ email });
  const hasedpassword = user.password;
  const user_id = user._id;

  bcrypt.compare(password, hasedpassword, function (err, result) {
    if (err) {
      res.send({ msg: " something went wrong" });
    }
    if (result) {
      const token = jwt.sign(
        { email: user.email, user_id },
        process.env.SECRETKEY
      );
      res.send({ msg: "login sucessfll", token: token, user_id });
    } else {
      res.send({ msg: "please check credentials" });
    }
  });
});
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch {
    console.log("error in database");
  }
  console.log(`started on ${PORT}`);
});
