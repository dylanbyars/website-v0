// $('document').ready(function() {
//   var msg = $('.client-message');
//   msg.autosize();
// });

const getRandomNumber = (num) => {
  return Math.floor((Math.random() * num))
}

// Display a random quote on page load
const quotes = [
  {
    quote: "Test to destruction: engineers like to do that. Only with a test to destruction can you find the outer limits of a system's strength",
    author: "Kim Stanley Robinson"
  },
  {
    quote: "You know more than you think you know, just as you know less than you want to know.",
    author: "Oscar Wilde"
  },
  {
    quote: "Society can be seen as a conspiracy of unquestioning acceptance of unprovable things.",
    author: "John Varley"
  },
  {
    quote: "I would rather sit on a pumpkin and have it all to myself than be crowded on a velvet cushion.",
    author: "Henry David Thoreau"
  }
]

const setQuote = (i) => {
  $('.quote').text(quotes[i].quote)
  $('.author').text(quotes[i].author)
}

// Sets a random quote when the page loads
setQuote(getRandomNumber(4))
