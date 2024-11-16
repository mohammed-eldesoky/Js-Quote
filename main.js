
var Quotes = [
    {'owner': '― Oscar Wilde', 
     'quote': '“Be yourself; everyone else is already taken.”'
    },
    {'owner': '― Frank Zappa', 
     'quote': '“So many books, so little time.”'
    },
    {'owner': '― Elbert Hubbard', 
     'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {'owner': '― Marcus Tullius Cicero', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'owner': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'owner': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function getQuote() {
    var randomIndex = Math.floor(Math.random() * Quotes.length);
    var randomQuote = Quotes[randomIndex].quote;
    var randomOwner = Quotes[randomIndex].owner;

    document.getElementById('demo-one').textContent = randomQuote;
    document.getElementById('demo-two').textContent = randomOwner;
}