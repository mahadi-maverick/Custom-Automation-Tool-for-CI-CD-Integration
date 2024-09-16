export default {
    moduleFileExtensions: ['js', 'json'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    rootDir: 'src',
    testRegex: '.*\\.test\\.js$',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    collectCoverageFrom: ['**/*.(service|controller).js'],
    coverageDirectory: '../coverage',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    testEnvironment: 'node',
};
