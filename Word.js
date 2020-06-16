let Letter = require("./Letter")

function Word(currentWord) {

    
    this.newLetter = currentWord.split("").map( function(val) {
        return new Letter(val)
    })
    
    this.show = function() {
        
        this.wordArr = []
        

        for (let i = 0; i < this.newLetter.length; i++) {
            this.wordArr.push(this.newLetter[i].hasGuessed())
        }

        console.log(this.wordArr.join(" "))

    }
}

module.exports = Word