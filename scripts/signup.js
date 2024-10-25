// signup.js

// Select the signup form
const signupForm = document.getElementById("signup");

// Add event listener for form submission
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting the default way

    // Display welcome alert on success
    alert("Welcome!");

    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
});