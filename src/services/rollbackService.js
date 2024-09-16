const axios = require('axios');
require('dotenv').config();

async function rollbackDeployment() {
    const jenkinsUrl = process.env.JENKINS_URL;
    const jobName = process.env.JENKINS_JOB_NAME;
    const token = process.env.JENKINS_TOKEN;

    try {
        const response = await axios.post(`${jenkinsUrl}/job/${jobName}/lastSuccessfulBuild/replay?token=${token}`);
        console.log('Rollback triggered:', response.status);
    } catch (error) {
        console.error('Error rolling back in Jenkins:', error);
        throw error;
    }
}

module.exports = { rollbackDeployment };
