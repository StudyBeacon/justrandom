// Get the Yes and No buttons
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Position "No" button initially
noBtn.style.left = "50%";
noBtn.style.top = "200px";

// Make "No" button run away when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// When "Yes" is clicked, go to love.html
yesBtn.addEventListener("click", () => {
  window.location.href = "love.html"; // redirect to your special page
});
