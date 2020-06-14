let Letter = require("./Letter")

function Word(currentWord) {

    this.wordArr = []
    this.currentWord = currentWord

    this.show = function() {

        
        console.log(this.currentWord.replace(/[a-z]/gi, " _ "))

    }
}


let hello = new Word('hello')
hello.show()