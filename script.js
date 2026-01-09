// REASSURANCE QUOTES BUTTON
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

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quote");

if (quoteBtn && quoteText) {
  quoteBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[random];
  });
}

// MEMBER TOGGLE (if still used elsewhere)
function toggleText(card) {
  card.classList.toggle("active");
}

// ARMY QUOTES SLIDESHOW
const armyQuotes = [
"Their music stayed with me when everything else felt distant.",
  "They reminded me that it was okay to feel lost sometimes.",
  "BTS helped me through so many things in my life and i can never say thank you enough.",
  "BTS made me feel understood without needing explanations.",
  "Their words felt like comfort on days I couldn’t explain myself.",
  "They taught me that moving slowly is still moving forward.",
  "It's the connection we can't explain.",
  "Not just any other group, it's a family.",
  "BTS is the only one who went down into my depths and taught me to 'LOVE MYSELF', that was the word i wanted to hear for so long.",
  "It feels like my world is suddenly light up, BTS hit me like a ray of sun in the darkest night.",
  "They are my happiness that has no ending. I am lucky to be a part of this beautiful journey. I love being an ARMY."
];

let armyIndex = 0;

const armyQuoteElement = document.getElementById("armyQuote");
const prevBtn = document.getElementById("prevQuote");
const nextBtn = document.getElementById("nextQuote");

function updateArmyQuote() {
  armyQuoteElement.textContent = `“${armyQuotes[armyIndex]}”`;
}

if (prevBtn && nextBtn && armyQuoteElement) {
  prevBtn.addEventListener("click", () => {
    armyIndex = (armyIndex - 1 + armyQuotes.length) % armyQuotes.length;
    updateArmyQuote();
  });

  nextBtn.addEventListener("click", () => {
    armyIndex = (armyIndex + 1) % armyQuotes.length;
    updateArmyQuote();
  });
}

