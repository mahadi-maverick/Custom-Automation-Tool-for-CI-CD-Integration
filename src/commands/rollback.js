const { rollbackDeployment } = require('../services/rollbackService');

module.exports = async function rollback() {
    console.log('Rolling back to the previous version...');
    try {
        await rollbackDeployment();
        console.log('Rollback successful!');
    } catch (error) {
        console.error('Rollback failed:', error);
        process.exit(1);
    }
};
