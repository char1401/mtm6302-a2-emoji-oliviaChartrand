// 1. Create your emoji array
const emojiCodes = [
    128512, // 😀 Grinning face
    128514, // 😂 Face with tears of joy
    128525, // 😍 Smiling face with heart-eyes
    128516, // 😄 Grinning face with smiling eyes
    128077, // 👍 Thumbs up
    128079, // 👏 Clapping hands
    128640, // 🚀 Rocket
    127881, // 🎉 Party popper
    128049, // 🐱 Cat
    128054, // 🐶 Dog
    127800, // 🌸 Cherry blossom
    127774  // ☀️ Sun
];

// 2. Build the gallery with JavaScript
// searches the HTML for an element with the matching id
const gallery = document.getElementById("emoji-gallery");

// 3. Create one function
// The count parameter controls how many emojis to display
// showEmojis() displays all emojis when no argument is supplied
function showEmojis(count = emojiCodes.length) {
    // 4. Display all emojis when the page loads
    // prevents duplicate cards when the function is called multiple times
    gallery.innerHTML = "";

}

showEmojis();