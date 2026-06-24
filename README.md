# Student Management System

## Project Overview

The Student Management System is a web-based application that allows users to manage student records efficiently. The system performs basic CRUD (Create, Read, Update, Delete) operations and stores data in a MySQL database.

---

## Features

* Add new students
* View all student records
* Delete student records
* Store data in MySQL database
* Modern dashboard-style user interface
* Responsive design

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

## Project Structure

```text
student-management-system/
│
├── server.js
├── db.js
├── package.json
│
└── public/
    ├── index.html
    ├── style.css
    ├── script.js
    └── images/
         └── education.jpg
```

---

## Database Schema

### Database Name

```sql
student_db
```

### Students Table

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-link>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Database

Create a MySQL database:

```sql
CREATE DATABASE student_db;
```

Create the students table using the schema above.

---

### 4. Start the Server

```bash
node server.js
```

If successful, the terminal will display:

```text
Database Connected
Server running on http://localhost:3000
```

---

## Usage

1. Open the application:

```text
http://localhost:3000
```

2. Add student information using the form.

3. View all students in the table.

4. Delete records when needed.

5. Data is automatically stored in the MySQL database.

---

## CRUD Operations

### Create

Add a new student record.

### Read

Retrieve and display all student records.

### Delete

Remove a student record from the database.

---

## Future Improvements

* Update/Edit student records
* Search functionality
* User authentication
* Dashboard analytics
* Export data to Excel/PDF

---

## Author

**Haseeb Ahsan**

Student Management System developed using Node.js, Express.js, MySQL, HTML, CSS, and JavaScript.

---

## License

This project is developed for educational and learning purposes.
