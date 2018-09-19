
// Build constructor for the clozecard object - use 'front' and 'back' as arguments.
let ClozeCard = function(text, cloze) {

    // Add property to the object - 'text', 'cloze', 'fullText', and 'partial'.
    this.text = text;
    this.cloze = cloze;

    // Function to build the cloze.
    this.fullText = function(cloze) {
        return cloze;
    }

    // Function to build partial text.
    this.partial = function(text, cloze) {
        return JSON.stringify(text = cloze);
    }
}

let firstPresC = new ClozeCard("George Washington was the first president.", "George Washington");

console.log(firstPresC)

// Export document information.
module.exports = ClozeCard;