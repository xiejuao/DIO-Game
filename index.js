const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user for character creation details
function createCharacter() {
    rl.question('Enter character name: ', (name) => {
        rl.question('Enter character class: ', (characterClass) => {
            rl.question('Enter character gender: ', (gender) => {
                rl.question('Enter difficulty level: ', (difficulty) => {
                    // Process the character creation details
                    console.log('Character created!');
                    console.log('Name:', name);
                    console.log('Class:', characterClass);
                    console.log('Gender:', gender);
                    console.log('Difficulty:', difficulty);

                    // Close the readline interface
                    rl.close();
                });
            });
        });
    });
}

// Call the createCharacter function to start character creation
createCharacter();