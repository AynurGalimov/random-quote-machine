var quotes = [
    {
        author: "Dr. Seuss", text: "Don't cry because it's over, smile because it happened."
    },
    {
        author: "Marilyn Monroe", text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    { author: "Oscar Wilde", text: "Be yourself; everyone else is already taken." },
    { author: "Albert Einstein", text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." },
    { author: "Bernard M. Baruch", text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." },
    { author: "Frank Zappa", text: "So many books, so little time." },
    { author: "Friedrich Nietzsche", text: "Without music, life would be a mistake." },
    { author: "Marcus Tullius Cicero", text: "A room without books is like a body without a soul." },
    { author: "Ralph Waldo Emerson", text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." },
    {
        author: "Mae West", text: "You only live once, but if you do it right, once is enough."
    }
];

var getQuote = function (quotes) {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
        $('#quote').html(quote.text);
        $('#author').html(quote.author);
};