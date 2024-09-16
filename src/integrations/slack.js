const axios = require('axios');
require('dotenv').config();

async function sendSlackNotification(message) {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    try {
        await axios.post(slackWebhookUrl, { text: message });
        console.log('Notification sent to Slack');
    } catch (error) {
        console.error('Error sending Slack notification:', error);
    }
}

module.exports = { sendSlackNotification };
