function generatePin(){
    const pin = Math.floor(Math.random() * 10000);
    return pin;
}


document.getElementsByClassName("generate-btn")[0].addEventListener("click", function(){
    let pin = generatePin();
    if(pin < 1000){
        pin = generatePin();
    }
    else{
        document.getElementById("generated-pin").value = pin;
    }
});

const digitBtn = document.getElementsByClassName("button");

for(let btn of digitBtn){
    btn.addEventListener("click", function(){
        document.getElementById("given-pin").value += btn.innerText; 
    });
}

document.getElementsByClassName("clear-button")[0].addEventListener("click", function(){
    const value = document.getElementById("given-pin").value;
    document.getElementById("given-pin").value = value.slice(0, -1);
});

document.getElementsByClassName("all-clear-button")[0].addEventListener("click", function(){
    document.getElementById("given-pin").value = "";
});

document.getElementsByClassName("submit-btn")[0].addEventListener("click", function(){
    const generatedPin = parseInt(document.getElementById("generated-pin").value);
    const submitedPin = parseInt(document.getElementById("given-pin").value);
    if(generatedPin != submitedPin){
        document.getElementById("not-match").style.display = "block";
        document.getElementById("matched").style.display = "none";
    } else{
        document.getElementById("not-match").style.display = "none";
        document.getElementById("matched").style.display = "block";
    }
});