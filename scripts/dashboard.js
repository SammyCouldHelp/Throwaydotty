document.getElementById("requestPickup").addEventListener("click", function() {
  alert("Special Pickup Requested!");
});

function showContent(id) {
  const containers = document.querySelectorAll('.container');
  containers.forEach(container => {
    container.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}
