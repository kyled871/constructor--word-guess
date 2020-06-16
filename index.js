const Word = require("./Word")
const Letter = require("./Letter");
const inquirer = require('inquirer');

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
    let current = new Word(randomWord);
    let eachLetter = new Letter(current.newLetter)
    
    let guessesLeft = 10
    console.log(`Guesses Left: ${guessesLeft}`)
    current.show()
    console.log(`\n`)
    question()

    function question() {
    
        if (guessesLeft > 0) {
            inquirer.prompt([
    
                {
                    type: 'input',
                    name: 'userInput',
                    message: 'Please select a letter: \n'
                }
    
            ]).then(function(answer) {
                
                let wrong = true
                let guess = answer.userInput
                let letterCount = 0
    
                for (i = 0; i < eachLetter.letter.length; i++) {
                    if (guess === eachLetter.letter[i].letter) {

                        eachLetter.letter[i].guessed = true
                        wrong = false
                        ++letterCount
                    }      
                } 
    
                if (wrong) {
                    --guessesLeft
                    wrong = true
                } else {
                    console.log(`Correct!\n`)
                }
    
                console.log(`Guesses Left: ${guessesLeft}`) 
                console.log(`\n`)   
                current.show()
                console.log(`\n`)
                question()
    
            })
    
        } else {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name:'startOver',
                    message: 'Game Over! Try Again?',
                    default: true
    
                }
            ]).then( function(answer) {
    
                if (answer.startOver) {
                    guessesLeft = 10
                    gameStart()
    
                }
    
            })
        }
        
    }
}

gameStart()


