const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// async function getQuote(url) {
//   const response = await fetch(url);
//   let data = await response.json();
//   //   console.log(data);
//   quote.innerHTML = data.content;
//   author.innerHTML = data.author;
// }
// getQuote(apiUrl);

// const tweet = () => {
//   window.open(
//     "https://twitter.com/intent/tweet?text=" +
//       quote.innerHTML +
//       "---- by " +
//       author.innerHTML,
//     "Tweet Window",
//     "width=600, height=300"
//   );
// };

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

async function fetchAndDisplayQuote() {
  await getQuote(apiUrl);
}

function tweet() {
  const tweetText = `${quote.innerHTML} ---- by ${author.innerHTML}`;
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText);
  window.open(tweetUrl, "Tweet Window", "width=600, height=300");
}

fetchAndDisplayQuote();
