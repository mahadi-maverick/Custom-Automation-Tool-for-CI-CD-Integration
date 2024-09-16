import { Command } from 'commander';
import { default as build } from './commands/build.js';
import { default as test } from './commands/test.js';
import { default as deploy } from './commands/deploy.js';
import { default as rollback } from './commands/rollback.js';

const program = new Command();

program
    .version('1.0.0')
    .description('Custom CI/CD Automation Tool');

// Build Command
program
    .command('build')
    .description('Build the application')
    .action(() => {
        build();
    });

// Test Command
program
    .command('test')
    .description('Run unit and integration tests')
    .action(() => {
        test();
    });

// Deploy Command
program
    .command('deploy')
    .description('Deploy the application')
    .action(() => {
        deploy();
    });

// Rollback Command
program
    .command('rollback')
    .description('Rollback the last deployment')
    .action(() => {
        rollback();
    });

program.parse(process.argv);
