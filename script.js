// Create an empty list to store the names of people who enter
let participants = [];

// Find the HTML elements we need to work with
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const participantList = document.getElementById('participantList');
const drawButton = document.getElementById('drawButton');
const winnerDisplay = document.getElementById('winnerDisplay');

// This function runs when the "Add Participant" button is clicked
addButton.onclick = function() {
    // Get the text from the input box
    const name = nameInput.value;

    // Check if the name is not just empty space
    if (name.trim() !== "") {
        // Add the name to our participants list
        participants.push(name);
        // Create a new list item for the screen
        const li = document.createElement('li');
        // Set the text of that item to the name
        li.innerText = name;
        // Put that item into the list on our webpage
        participantList.appendChild(li);
        // Clear the input box so it's ready for the next name
        nameInput.value = "";
    }
};

// This function runs when the "Draw a Winner!" button is clicked
drawButton.onclick = function() {
    // Check if there are actually people in the raffle
    if (participants.length > 0) {
        // Pick a random number based on the length of our list
        const randomIndex = Math.floor(Math.random() * participants.length);
        // Use that number to select a name from our list
        const winner = participants[randomIndex];
        // Display the winner's name with emojis in the winner area
        winnerDisplay.innerHTML = "🎉 The winner is: " + winner + " 🎂";
    } else {
        // Tell the user to add names if they haven't yet
        winnerDisplay.innerText = "Please add participants first!";
    }
};

// ... existing variables ...
const resetButton = document.getElementById('resetButton');

// This function runs when the "Reset Raffle" button is clicked
resetButton.onclick = function() {
    // 1. Clear the data array by setting its length to 0
    participants.length = 0;

    // 2. Remove all names from the visible list on the webpage
    participantList.innerHTML = "";

    // 3. Clear the winner display text
    winnerDisplay.innerText = "";

    // Optional: Log to console to confirm the raffle is empty
    console.log("Raffle Reset! Participants count: " + participants.length);
};