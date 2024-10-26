document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("wasteReportForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents form from submitting
      alert("Thank you for reporting the waste heap! We will address it as soon as possible.");

      // Clear the form fields
      form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Get the form and buttons by their IDs
  const form = document.getElementById("subscribe-form");
  const subscribeButton = document.getElementById("subscribe-btn");
  const unsubscribeButton = document.getElementById("unsubscribe-btn");

  // Add event listener for the Subscribe button
  subscribeButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      alert("Thank you for subscribing to our newsletter!");
      
      // Clear the form fields
      form.reset();
  });

  // Add event listener for the Unsubscribe button
  unsubscribeButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      alert("You have unsubscribed from our newsletter.");
      
      // Clear the form fields
      form.reset();
  });
});

// nav

function toggleMenu() {
  const menu = document.querySelector (".menu-links");
  const icon = document.querySelector (".hamburger-icon");
  menu.classList.toggle ("open")
  icon.classList.toggle ("open")
}