let Letter = require("./Letter")

function Word(currentWord) {

    this.wordArr = []
    this.currentWord = currentWord

    this.newLetter = currentWord.split("").map( function(val) {
        return new Letter(val)
    })

    this.show = function() {

        for (let i = 0; i < this.newLetter.length; i++) {
            this.wordArr.push(this.newLetter[i].hasGuessed())
        }

        console.log(this.wordArr.join("   "))

    }
}

module.exports = Word