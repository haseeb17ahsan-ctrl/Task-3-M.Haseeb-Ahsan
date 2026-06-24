const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


// ADD STUDENT
app.post("/students", (req, res) => {
    const { name, email, course } = req.body;

    db.query(
        "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
        [name, email, course],
        (err) => {
            if (err) return res.send("Error adding student");
            res.send("Student Added");
        }
    );
});


// GET STUDENTS
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) return res.send("Error fetching data");
        res.json(result);
    });
});


// DELETE STUDENT
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM students WHERE id=?", [id], (err) => {
        if (err) return res.send("Error deleting");
        res.send("Deleted");
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});