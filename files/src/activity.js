/**
 * Fetches a random activity from the Bored API.
 * @returns {Promise<string>} A promise that resolves to a string describing the activity.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error('Error fetching activity:', error);
        throw error;
    }
}

