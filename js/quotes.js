console.log('hello from quotes');


const loadQuote=()=>{
    console.log('load code');
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuote(data));
}

const displayQuote=quote=>{
    console.log(quote);
    const blockQuotes=document.getElementById('quotes');
    blockQuotes.innerHTML=quote.quote;
}

loadQuote();