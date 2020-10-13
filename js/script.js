// array of movie quote objects
let quotes = [
  {
    quote: 'We get the warhead and we hold the world ransom for…. One million dollars.',
    source: 'Dr. Evil (Mike Myers)',
    citation: 'Austin Powers: International Man of Mystery',
    year: 1997,
    context: 'Dr. Evil after recently waking from decades-long cryogenic freezing, completely missing the concept of inflation.'
  },
  {
    quote: 'Leave the gun. Take the cannoli.',
    source: 'The Godfather',
    year: 1972,
  },
  {
    quote: 'It\'s not a man purse. It\'s called a satchel. Indiana Jones wears one.',
    source: 'Alan Garner (Zach Galifianakis)',
    citation: 'The Hangover',
    year: 2009
  },
  {
    quote: 'It\'s just a flesh wound.',
    source: 'The Black Knight (John Cleese)',
    citation: 'Monty Python and the Holy Grail',
    year: 1975,
    context: 'The Black Knight to King Arthur, after losing both arms in the heat of combat.'
  },
  {
    quote: 'That rug really tied the room together, did it not?',
    source: 'Walter Sobchak (John Goodman)',
    citation: 'The Big Lebowski',
    year: 1998,
    context: 'Walter Sobchak lamenting with The Dude about the latter\'s recently befouled rug.'
  }
];

// function to generate random index for arrays
const getRandomIndex = arrayLength => {
  return Math.floor(Math.random() * Math.floor(arrayLength));
}

// get random quote function
let viewedQuotes = []; // stores viewed quotes to avoid duplication
const getRandomQuote = quoteArray => {
  // get random index 
  const randomArrayIndex = getRandomIndex(quoteArray.length);

  // store random quote object
  const quote = quoteArray[randomArrayIndex];

  // store viewed quote and remove it to avoid seeing same one before all have been viewed
  viewedQuotes.push(quote);
  quoteArray.splice(randomArrayIndex, 1);

  // check if quote array empty, if so repopulate it with ones that were viewed again
  if(quoteArray.length === 0) {
    quotes = [...viewedQuotes];
    viewedQuotes = [];
  }
  return quote;
}

// print quote function
const printQuote = () => {
  const quote = getRandomQuote(quotes);

  //construct html
  let html = '';
  html += `<p class="quote">${quote.quote}</p>
          <p class="source">${quote.source}`;

  // citation check 
  if(quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  // year check 
  if(quote.year) {
    html += `<span class="year">${quote.year}</span>`
  }
  html += `</p>`;   // add the closing p tag

  // context check 
  if(quote.context) {
    html += `<p class="quote-context">${quote.context}</p>`
  };

  changeBackgroundColor();
  document.getElementById('quote-box').innerHTML = html;
}


// change background color function
const colors = [ '#961212', '#407294', '#065535', '#420420', '#133337', 
    '#b85454', '#003366',  '#333333', '#853179'
];

const changeBackgroundColor = () => {
  // get random index for colors array
  randomIndex = getRandomIndex(colors.length);
  // change background color 
  document.body.style.background = colors[randomIndex];
}

// function for automatic quote changing with 10s time interval
const autoQuoteChange = () => {
  setInterval(printQuote, 10 * 1000);
}

// == Event Listener ==
// 
document.getElementById('load-quote').addEventListener("click", printQuote, false);
autoQuoteChange();