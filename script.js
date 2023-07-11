fetch('https://api.kanye.rest/')
.then(kanyequote=>kanyequote.json())
.then(
    funnyquote=>{
        const quote = funnyquote.quote;
        document.getElementById("showhere").innerHTML = quote +".";
    }
)