// Comfort Mode
const comfortBtn = document.getElementById("comfortBtn");

comfortBtn.addEventListener("click", () => {
  document.body.classList.toggle("comfort");
  comfortBtn.textContent = document.body.classList.contains("comfort")
    ? "Exit Comfort Mode"
    : "Enter Comfort Mode 💜";
});

// Quotes
const quotes = [
  "You don't have to be perfect. Just be yourself.",
  "Even if you feel lost, you're still moving forward.",
  "It's okay to rest sometimes.",
  "After winter, spring always comes."
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});


