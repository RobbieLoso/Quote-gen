let temp1 = [];

function genQuote() {
    fetch("https://api.quotable.io/random") 
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}