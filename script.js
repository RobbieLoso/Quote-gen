let quoteGenerator = [];

function genQuote() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

    let randomQuote = Math.floor(Math.random() * (quotes.length))
    document.getElementById("quote-font").innerHTML = '${quotes[randomQuote].content}';
}


function orangeFont(){
    document.getElementById('quote-font').style.color = '#F3A183'
}
function blueFont(){
    document.getElementById('quote-font').style.color = '#348ac7'
}
function grayFont(){
    document.getElementById('quote-font').style.color = '#859398'
}
function yellowFont(){
    document.getElementById('quote-font').style.color = '#ffeb9c'
}
function greenFont(){
    document.getElementById('quote-font').style.color = '#71b280'
}





function orangeBackground(){
    document.getElementById('quote-card').style.backgroundColor='red'
}
function blueBackground(){
    
}

function blueBackground(){

}
function grayBackground(){
    
}
function yellowBackground(){
    
}
function greenBackground(){
    
}
