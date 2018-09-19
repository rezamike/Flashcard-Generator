
// Build constructor for the clozecard object - use 'front' and 'back' as arguments.
let ClozeCard = function(text, cloze) {

    // Add property to the object - 'text', 'cloze', 'fullText', and 'partial'.
    this.text = text;
    this.cloze = cloze;

    // Function to build the cloze.
    this.fullText = function() {
        return cloze;
    }

    // Function to build partial text.
    this.partial = function() {

        if (this.fullText.includes(this.cloze)) {
            return this.fullText.replace(this.cloze, "...");
        }
    }
}

let firstPresC = new ClozeCard("George Washington was the first president.", "George Washington");



console.log(firstPresC.partial())

// Export document information.
module.exports = ClozeCard;