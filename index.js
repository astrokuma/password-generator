const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let numbersState = true
let symbolsState = true

const numbersEl = document.getElementById("numbers-toggle")
const symbolsEl = document.getElementById("symbols-toggle")
const generate = document.getElementById("generate")
const passwrod = document.getElementById("password")
const copyButton = document.getElementById("copy")

function numbersToggle(){
    if (numbersState) {
        numbersEl.textContent = "Numbers Off"
        numbersState = false
        numbersEl.classList.remove("toggle-on")
        numbersEl.classList.add("toggle-off")
    } else {
        numbersEl.textContent = "Numbers On"
        numbersState = true
        numbersEl.classList.add("toggle-on")
        numbersEl.classList.remove("toggle-off")
    }
}

function symbolsToggle(){
    if (symbolsState) {
        symbolsEl.textContent = "Symbols Off"
        symbolsState = false
        symbolsEl.classList.remove("toggle-on")
        symbolsEl.classList.add("toggle-off")
    } else {
        symbolsEl.textContent = "Symbols On"
        symbolsState = true
        symbolsEl.classList.add("toggle-on")
        symbolsEl.classList.remove("toggle-off")
    }
}

function generatePassword(){
    let newPass = ""
    let fullCharacters = []
    if (numbersState){
       if (symbolsState){
           fullCharacters = characters.concat(numbers, symbols)
       } else{
           fullCharacters = characters.concat(numbers)
       }
    } else if (symbolsState) {
        if(numbersState){
            fullCharacters = characters.concat(number,symbols)
        } else {
            fullCharacters = characters.concat(symbols)
        }
    } else{
        fullCharacters = characters
    }
    
    for (let i=0; i<19; i++){
        let random = Math.trunc(Math.random()*fullCharacters.length)
        newPass += fullCharacters[random]
    }
    passwrod.textContent = newPass
    copyButton.classList.remove("disabled")
    copyButton.disabled = false
}

async function copyText() {
    try {
        await navigator.clipboard.writeText(password.textContent);
        alert('Password copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text:', err.message || err);
    }
}

