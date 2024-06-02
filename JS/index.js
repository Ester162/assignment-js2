var listofQoutes = [
  {
    qoute: "So many books, so little time.",
    author: " Frank Zappa",
  },
  {
    qoute: "A room without books is like a body without a soul.",
    author: " Marcus Tullius Cicero",
  },
  {
    qoute: "A friend is someone who knows all about you and still loves you.",
    author: "  Elbert Hubbard",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    author: " Mahatma Gandhi",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough.",
    author: "  Mae West",
  },
  {
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "  Robert Frost",
  },
];

var getRandom;
var lastIndex;

var displayedQoutes = [];

function generateQoute() {

  // to be sure that it display all the list 
  if(displayedQoutes.length == listofQoutes.length)
    {
      displayedQoutes = [];
    }
// to be sure that it gets a random qoute every time 
  do {
    getRandom = Math.floor(Math.random() * listofQoutes.length);
  } while (getRandom == lastIndex || displayedQoutes.includes(getRandom));
  lastIndex = getRandom;
// ---------------------------------


  displayedQoutes.push(getRandom);

  document.getElementById("qoute").innerHTML = listofQoutes[getRandom].qoute;
  document.getElementById("author").innerHTML = listofQoutes[getRandom].author;
}
