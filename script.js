let temp1 = [];

function genQuote() {
    fetch("https://api.quotable.io/random") 
    .then(res => res.json())
    .then(data => {
        console.log(data);
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
    document.getElementById('orange-background').style.backgroundColor='red'
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
