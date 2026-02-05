const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.style.left = "50%";
noBtn.style.top = "200px";

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  alert("Yay! ❤️ I knew you'd say YES!");
});
