document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Thank you for contacting us, " + name + "!");
  this.reset();
});