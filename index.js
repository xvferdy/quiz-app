const express = require("express");
const app = express();

const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "userdb",
});

const bodyParser = require("body-parser");

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/users", (req, res) => {
//   res.json(userList);
// });

app.get("/users", (req, res) => {
  db.query("SELECT * FROM user;", (err, result) => {
    res.json(result);
  });
});

//CREATE
app.post("/users", (req, res) => {
  //#1 ambil data yang mau di tambahkan (untuk datanya coba langsung via postman)
  //#2 masukan data ke dalam userList
  //#3 liat data userList yang baru

  let newUser = req.body; //newUser => via postman (data berupa json)
  userList.push(newUser);
  res.json(userList);
});

//UPDATE
app.put("/users", (req, res) => {
  //#1 ambil nama baru
  //#2 loop pada userList lalu ganti name
  //#3 liat data userList yang baru
  let newName = req.body.newName;
  userList.map((user) => (user.id === 3 ? (user.name = newName) : user));
  res.json(userList);
});

//DELETE
app.delete("/users/:id", (req, res) => {
  //#1 ambil id yg mau delete
  //#2 delete user dgn id tsb
  //#3 liat data userList yang baru
  const id = req.params.id;
  console.log(typeof id);

  let foundId = false;
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == id) {
      userList.splice(i, 1);
      foundId = true;
    }
  }

  //error handling
  if (foundId) {
    res.json(userList);
  } else {
    res.status(404).json({ error: "id not found" });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
console.log("inside console");

//==================== database sementara ====================

let userList = [
  { id: 1, name: "ferdy", age: 24, married: false },
  { id: 2, name: "clara", age: 19, married: false },
  { id: 3, name: "beni", age: 20, married: true },
];
