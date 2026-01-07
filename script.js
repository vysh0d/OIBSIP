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
  "It’s okay to stop / There’s no need to run without even knowing the reason. — Paradise",
  "The morning will come again / No darkness, no season can last forever. — Spring Day",
  "On a day you hate being yourself... let's build a door in your mind. Once you open the door and enter, this place will wait for you. It’s okay to believe, the Magic Shop will comfort you. — Magic Shop",
  "It's okay to rest sometimes.",
  "If you can’t fly, then run. If you can’t run, then walk. If you can’t walk, then crawl. Even if you crawl, gear up. — Not Today",
  "After winter, spring always comes. — Spring Day",
  "I’m the one I should love in this world / Shining me, precious soul of mine. — Epiphany",
  "It’s okay, come on, when I say one, two, three, forget it / Erase all sad memories, hold my hand and smile. — 2! 3!",
  "Maybe I made a mistake yesterday, but yesterday’s me is still me. I am who I am today, with all my faults. — Answer: Love Myself"
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});

function toggleText(card) {
  card.classList.toggle("active");
}


