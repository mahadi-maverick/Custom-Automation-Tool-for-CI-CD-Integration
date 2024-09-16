const { deployToPlatform } = require('../services/deployService');

module.exports = async function deploy() {
    console.log('Deploying application...');
    try {
        await deployToPlatform();
        console.log('Deployment successful!');
    } catch (error) {
        console.error('Deployment failed:', error);
        process.exit(1);
    }
};
