import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function getUserInput() {
    // Create an interface to read from the terminal
    const rl = readline.createInterface({ input, output });

    try {
        // Wait for the user to type an answer and press Enter
        const age = await rl.question('How old are you? ');
        console.log(`Next year, you will be ${Number(age) + 1} years old.`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Crucial: Always close the interface to stop the process from hanging
        rl.close();
    }
}

getUserInput();