let Word = require("./Word")

let wordBank = [
    'aardvark',
    'alligator',
    'bandicoot',
    'badger',
    'cockatoo',
    'chinchilla',
]

function randomPick() {
    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord)

    
}

randomPick()