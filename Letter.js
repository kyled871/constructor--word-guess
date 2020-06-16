function Letter(letter) {

    this.letter = letter
    this.guessed = false

    this.hasGuessed = function() {
        if (this.guessed) {
            return this.letter
        } else {
            return "_"
        }
    }

    this.checker = function(input) {
        if (input === this.letter) {
            this.guessed = true

        } 
    }
}


// testing if letter is = to input
// let newLetter = new Letter('q')
// newLetter.checker('w')



module.exports = Letter