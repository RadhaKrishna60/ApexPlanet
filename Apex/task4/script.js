// script.js

function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
  console.log(`Added to cart: ${productName}`);
}

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Message sent successfully!");
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  } else {
    alert("Please fill out all fields.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
