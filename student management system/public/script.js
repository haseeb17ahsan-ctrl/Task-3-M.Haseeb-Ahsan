const form = document.getElementById("form");
const table = document.getElementById("table");
const totalStudents = document.getElementById("totalStudents");

// inputs (IMPORTANT: these must exist in HTML)
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");

let students = [];

// =======================
// LOAD STUDENTS
// =======================
async function loadData() {
    try {
        const res = await fetch("/students");
        students = await res.json();

        // update dashboard counter
        if (totalStudents) {
            totalStudents.innerText = students.length;
        }

        renderTable(students);

    } catch (err) {
        console.error("Error loading data:", err);
    }
}

// =======================
// RENDER TABLE
// =======================
function renderTable(data) {
    table.innerHTML = "";

    data.forEach(student => {
        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>
                <button onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        </tr>
        `;
    });
}

// =======================
// ADD STUDENT
// =======================
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await fetch("/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                course: courseInput.value
            })
        });

        form.reset();
        loadData();

    } catch (err) {
        console.error("Error adding student:", err);
    }
});

// =======================
// DELETE STUDENT
// =======================
async function deleteStudent(id) {
    try {
        await fetch(`/students/${id}`, {
            method: "DELETE"
        });

        loadData();

    } catch (err) {
        console.error("Error deleting student:", err);
    }
}

// =======================
// INITIAL LOAD
// =======================
loadData();