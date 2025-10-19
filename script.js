var registerBtn = document.getElementById("registerBtn");
var RegisteredTable = document.getElementById("RegisteredTable");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent form submit

    // Selecting Elements
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var genderRadio = document.querySelector('input[name="gender"]:checked');
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var count = 1;

    if (!name || !age || !genderRadio || !course || !email) {
        alert("Please fill out all fields.");
        return;
    }

    var gender = genderRadio.value;

    // Create new row
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td>
            <button type="button" class="deleteBtn">Delete</button>
        </td>
    `;

    // Append row to table
    RegisteredTable.append(newRow);

    // Clear input fields
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
    document.getElementById("course").selectedIndex = 0;
    document.getElementById("email").value = '';

    // Delete functionality
    newRow.querySelector(".deleteBtn").addEventListener("click", function () {
        if (count == 1) {
            alert("Are you sure you want to delete it? If yes, click the delete button again.");
            count = 0;
        } else {
            newRow.remove();
        }
    });
});
