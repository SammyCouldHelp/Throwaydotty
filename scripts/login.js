// login.js

// Select the login form
const loginForm = document.getElementById("login");

// Add event listener for form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting the default way

    // Display welcome alert on success
    alert("Welcome!");

    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
});