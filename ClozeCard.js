
// Build constructor for the clozecard object - use 'front' and 'back' as arguments.
let ClozeCard = function(text, cloze) {

    // Add property to the object - 'text', 'cloze', and 'partial'.
    this.cloze = cloze;
    this.fullText = text;

    // Function to build partial text.
    this.partial = function(error) {

        if (this.fullText.includes(cloze)) {
            return this.fullText.replace(cloze, "...");
        }
        else {
            console.log(error);
        }
    }
}

// Export document information.
module.exports = ClozeCard;