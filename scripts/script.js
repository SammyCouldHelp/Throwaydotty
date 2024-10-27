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


    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = currentIndex * slides[0].clientWidth;
        document.querySelector('.slider').scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    }

    // Change slide every 4 seconds (4000 milliseconds)
    setInterval(showNextSlide, 4000);


    // Import AOS
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
script.onload = function () {
    // Initialize AOS after the script is loaded
    AOS.init({
        duration: 1000, // Animation duration (1 second)
        once: true,     // Ensures animations happen only once as you scroll
    });
};
document.head.appendChild(script);

document.addEventListener("DOMContentLoaded", function() {
  // Your existing JavaScript code...

  // Initialize AOS after the DOM is fully loaded
  AOS.init({
      duration: 1000, // Adjust the animation duration in milliseconds
      once: true,     // Animation will happen only once when scrolled
  });

  // Rest of your existing JS code
});


