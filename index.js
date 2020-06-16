let Word = require("./Word")
let inquirer = require('inquirer');

let guessesLeft = 10


let wordBank = [
    'aardvark',
    'alligator',
    'bandicoot',
    'badger',
    'cockatoo',
    'chinchilla',
]

function gameStart() {

    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    let current = new Word(randomWord)

    question()

}


function question() {

    if (guessesLeft != 0) {

        inquirer.prompt([

            {
                type: 'input',
                name: 'userInput',
                message: 'Please select a letter: '
            }

        ])



    }


}



gameStart()
