const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Position "No" button initially
noBtn.style.left = "50%";
noBtn.style.top = "200px";

// Move "No" button when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Action when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  alert("Yay! ❤️ I knew you'd say YES!");
});
