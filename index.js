const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let FirstPassword = document.getElementById("firstPassword")
let SecondPassword = document.getElementById("secondPassword")
let Neu = document.getElementById("neu")
function randomChar(){
    let randomPass = Math.floor(Math.random() * characters.length)
    return characters[randomPass]
}

function makePassword() {
    let result1  = "";
    let result2 = "";
    for(let i=0; i<15; i++){
            result1 += randomChar()
            result2 += randomChar()
    }
    FirstPassword.textContent = result1
    SecondPassword.textContent = result2 
}


