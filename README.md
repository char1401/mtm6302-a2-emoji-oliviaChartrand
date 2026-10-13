# mtm6302-a2-emoji-oliviaChartrand
This is the Emoji Project: Create a responsive emoji gallery using JavaScript. Store emoji codes in an array, use a loop to build the gallery, and write one function that controls how many emojis appear.


Cheat Sheet I had in my docs that helped me:
The code                        What it means
const emojiCodes = [...]	    Creates an array to store the emoji codes
emojiCodes.length	            Returns the number of items in the array
count = emojiCodes.length	    Sets a default value when no argument is provided
gallery.innerHTML = ""	        Clears the existing cards
let index = 0	                Starts the loop at the first array index
index < count	                Keeps the loop running until it has created the requested number of cards
index++	                        Increases the index by one after each loop
String.fromCodePoint(code)	    Converts a decimal Unicode code point into a character
document.createElement()	    Creates a new HTML element
textContent	                    Sets the text or character displayed inside an element
appendChild()	                Adds an element inside another element

Thank you, again, https://www.w3schools.com for keeping it real with me 