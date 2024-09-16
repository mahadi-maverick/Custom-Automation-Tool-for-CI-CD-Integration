import { deployToPlatform } from '../services/deployService.js';

export default async function deploy() {
    console.log('Deploying application...');
    try {
        await deployToPlatform();
        console.log('Deployment successful!');
    } catch (error) {
        console.error('Deployment failed:', error);
        process.exit(1);
    }
}
