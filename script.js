function genQuote() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quoteGenerator = data.content
        document.getElementById("quote-font").innerHTML = quoteGenerator
    })    
}
function genQuote2() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quoteGenerator = data.author
        document.getElementById("quote-font2").innerHTML = quoteGenerator
    })    
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

// SECTION FOR References Pop-up Menu

const referencesPopup = getElementById('refCard-wrapper')

function openPopup() {
    referencesPopup.classList.add("open-popup");
}