const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const users = require("./data.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const secret = "my_secret_key";

// login route

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  jwt.sign({ user }, secret, { expiresIn: "24h" }, (err, token) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(token);
    }
  });
});

// become route

app.get("/become", verifyToken, (req, res) => {
  res.send("Welcome home!");
});

// middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (typeof token !== "undefined") {
    jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
      if (err) {
        res.status(401).send(err);
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.status(401).send("Unauthorized");
  }
}

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
