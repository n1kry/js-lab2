import {getRandomActivity} from './activity.js';

/**
 * Updates the activity displayed on the HTML page.
 * @returns {Promise<void>}
 */
async function updateActivity() {
    const activityElement = document.getElementById('activity');
    try {
        activityElement.textContent = await getRandomActivity();
    } catch (error) {
        activityElement.textContent = 'К сожалению, произошла ошибка';
    }
}

/**
 * Initializes the application and sets up periodic updates.
 */
function init() {
    updateActivity();
    setInterval(updateActivity, 60000); // Update every minute
}

init();