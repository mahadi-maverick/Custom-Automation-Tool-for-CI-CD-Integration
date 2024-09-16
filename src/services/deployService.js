const axios = require('axios');
require('dotenv').config();

async function deployToPlatform() {
    const jenkinsUrl = process.env.JENKINS_URL;
    const jobName = process.env.JENKINS_JOB_NAME;
    const token = process.env.JENKINS_TOKEN;

    try {
        const response = await axios.post(`${jenkinsUrl}/job/${jobName}/build?token=${token}`);
        console.log('Deployment triggered:', response.status);
    } catch (error) {
        console.error('Error deploying to Jenkins:', error);
        throw error;
    }
}

module.exports = { deployToPlatform };
