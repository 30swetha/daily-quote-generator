const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Do something today that your future self will thank you for.",
  "Push yourself, because no one else is going to do it for you.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Small progress is still progress.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Great things never come from comfort zones."
];

const quoteBox = document.getElementById("quoteBox");
const button = document.getElementById("newQuoteBtn");

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteBox.classList.remove("show");
  setTimeout(() => {
    quoteBox.textContent = `"${quote}"`;
    quoteBox.classList.add("show");
  }, 300);
}

window.onload = showQuote;
button.addEventListener("click", showQuote);
