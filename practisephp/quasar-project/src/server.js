import express from "express";
import mysql from "mysql2"; // Use mysql2 for ES module compatibility
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 7000;

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
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const { name, surname, password } = req.body;

  // Insert data into the database
  const query = "INSERT INTO user (name, surname, pass) VALUES (?, ?, ?)";
  db.query(query, [name, surname, password], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Data inserted successfully");
    }
  });
});
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const query = "SELECT * FROM user WHERE name = ? AND pass = ?";
  db.query(query, [name, password], (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Ok all correct")
    }
  });
});
app.get("/answers/:userId", (req, res) => {
  const userId = req.params.userId;

  const query = "SELECT answer FROM ans WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log("All the correct")
    }
  });
});

app.post("/save-answer", (req, res) => {
  const { userId, answer } = req.body;

  const query = "INSERT INTO ans (user_id, answer, img) VALUES (?, ?, ?)";
  db.query(query, [userId, answer, img], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("All the correct")
    }
  });
});

// Route to handle fetching all users (if needed)
app.get("/users", (req, res) => {
  const query = "SELECT * FROM user";
  db.query(query, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log("All the correct")
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
