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

    // 5. Present the gallery clearly (for JS: Use const and let, not var)
    for (let index = 0; index < count; index++) {
        // Get the decimal Unicode code at the current index
        const code = emojiCodes[index];
    
        // Convert the decimal code into an emoji
        // Converts a Unicode code point into the character it represents
        const emoji = String.fromCodePoint(code);

        // creates an HTML without needing to write it manually in index.html
        const card = document.createElement("div");

        // !!!BEWARE!!! Things get confusing for me here, thank you https://www.w3schools.com for carrying all my assignements
        // Assign a CSS class so the card receives its styling
        card.className = "emoji-card";

        // Create an element to display the emoji
        const emojiElement = document.createElement("span");

        // The CSS class will make the emoji large (thinking ahead)
        emojiElement.className = "emoji";

        // Will put the emoji character inside the span (thinking ahead)
        emojiElement.textContent = emoji;

        // Creates an element to display the decimal code
        const codeElement = document.createElement("p");

        // The CSS class styles the decimal code (thinking ahead)
        codeElement.className = "emoji-code";

        // Display the original number, not the emoji character
        codeElement.textContent = "Code: " + code;

        // Put the two elements inside the card
        // Adds an element inside another element (the emoji appears first, followed by its code)
        card.appendChild(emojiElement);
        card.appendChild(codeElement);

        // Each loop creates and adds one new card
        gallery.appendChild(card);
    }
}

// No argument is supplied, so count defaults to emojiCodes.length, which is 12 in this assignment
showEmojis();

// IT WORKS OMG I SEE THE EMOJIS ON THE PAGE NOW YIPPIE!!!! WAHOOO!!! HURRAY!!!