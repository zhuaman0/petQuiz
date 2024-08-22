import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 6000; // Changed from 5173 to 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ts",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to MySQL");
});

// Endpoint to fetch users
app.get("/users", (req, res) => {
  db.query("SELECT id, question, answer FROM user", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

// Endpoint to add a new user
app.post("/users", (req, res) => {
  const { question, answer } = req.body;
  db.query(
    "INSERT INTO user (question, answer) VALUES (?, ?)",
    [question, answer],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json({ id: result.insertId, question, answer });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
