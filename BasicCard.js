
// Build constructor for basiccard object - use 'front' and 'back' as arguments.
let BasicCard = function(front, back) {

    // Add property to the object - 'front' and 'back'.
    this.front = front;
    this.back = back;
    this.value = false;
}

// Export document information.
module.exports = BasicCard;