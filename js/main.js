function generateQuote(){
    var rand=Math.round(Math.random()*quotesArr.length);
    while(rand==checker||rand>=quotesArr.length)
        {
            rand=Math.round(Math.random()*quotesArr.length);
        }
    checker=rand;
    document.getElementById("quoteOutput").textContent=quotesArr[checker].quote;
    document.getElementById("authorOutput").textContent=quotesArr[checker].author;
    console.log(quotesArr[checker].quote);

}


var quotesArr=[
                {
                    'quote':`“Be yourself; everyone else is already taken.”`,
                    'author':`― Oscar Wilde`
                },
                {
                    'quote':`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
                    'author':`― Albert Einstein`
                },
                {
                    'quote':`“A room without books is like a body without a soul.”`,
                    'author':`― Marcus Tullius Cicero`
                },
                {
                    'quote':`“You only live once, but if you do it right, once is enough.”`,
                    'author':`― Mae West`
                },
                {
                    'quote':`“Be the change that you wish to see in the world.”`,
                    'author':`― Mahatma Gandhi`
                },
                {
                    'quote':`“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
                    'author':`― Oscar Wilde`
                },
                {
                    'quote':`“It is better to be hated for what you are than to be loved for what you are not.”`,
                    'author':`― Andre Gide`
                },
                {
                    'quote':`“That which does not kill us makes us stronger.”`,
                    'author':`― Friedrich Nietzsche`
                },
                {
                    'quote':`“It is never too late to be what you might have been.”`,
                    'author':`― George Eliot`
                },
                {
                    'quote':`“For every minute you are angry you lose sixty seconds of happiness.”`,
                    'author':`― Ralph Waldo Emerson`
                }
];

var checker;


