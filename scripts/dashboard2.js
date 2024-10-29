// Sample data for demonstration
const overviewData = {
  totalPickups: 15,
  serviceStatus: "Active",
  paymentStatus: "Unpaid",
  nextPickup: "Tomorrow, 9:00 AM",
};

// Render Overview Data
function renderOverview() {
  document.querySelectorAll('.card').forEach((card, index) => {
    switch (index) {
      case 0: card.querySelector('p').textContent = overviewData.totalPickups; break;
      case 1: card.querySelector('.status').textContent = overviewData.serviceStatus; break;
      case 2: card.querySelector('.alert').textContent = overviewData.paymentStatus; break;
      case 3: card.querySelector('p').textContent = overviewData.nextPickup; break;
    }
  });
}

// Calendar Initialization (Placeholder)
function initCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "<p>Upcoming Pickup: Oct 31, 9:00 AM</p>";
}

// Load all components on page load
document.addEventListener("DOMContentLoaded", () => {
  renderOverview();
  initCalendar();
});
