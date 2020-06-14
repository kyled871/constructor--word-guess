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
        if (input === letter) {
            this.guessed === true
        }
    }

}