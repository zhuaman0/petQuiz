import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("You have connected");
  }
});

app.post("/data", (req, res) => {
  const { name, surname, password } = req.body;

  const query = "INSERT INTO user (name, surname, pass) VALUES (?, ?, ?)";
  db.query(query, [name, surname, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("You are seksi");
    }
  });
});

app.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`);
});
