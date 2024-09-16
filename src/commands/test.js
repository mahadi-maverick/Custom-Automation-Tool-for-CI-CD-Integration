const shell = require('shelljs');
const chalk = require('chalk');

module.exports = function test() {
    console.log(chalk.blue('Running tests...'));

    if (shell.exec('npm run test').code !== 0) {
        console.error(chalk.red('Tests failed.'));
        process.exit(1);
    }

    console.log(chalk.green('Tests passed successfully!'));
};