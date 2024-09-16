import shell from 'shelljs';
import chalk from 'chalk';

export default function build() {
    console.log(chalk.blue('Building the application...'));

    if (shell.exec('npm install').code !== 0 || shell.exec('npm run build').code !== 0) {
        console.error(chalk.red('Build failed.'));
        process.exit(1);
    }

    console.log(chalk.green('Build successful!'));
}
