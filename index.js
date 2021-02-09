const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/", (req, res) => {
//   res.send(`
//     <div>
//     <form action="/" method="POST">
//       <input placeholder="email" name="email!"/>
//       <input placeholder="password" />
//       <input placeholder="password confirmation" />
//       <button>Sign Up</button>
//     </form>
//   </div>
//     `);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
// });

app.get("/users", (req, res) => {
  res.json(userList);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

console.log("inside console");

//====================

let userList = [
  { name: "ferdy", age: 24, married: false },
  { name: "clara", age: 19, married: false },
  { name: "beni", age: 20, married: true },
];
