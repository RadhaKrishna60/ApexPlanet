// --- Image Carousel ---
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function showImage() {
  document.getElementById("carousel").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

showImage(); // initial load

// --- Joke Generator ---
async function getJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  document.getElementById("jokeDisplay").textContent = `${data.setup} - ${data.punchline}`;
}
