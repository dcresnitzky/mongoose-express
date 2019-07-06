// jest.config.js
module.exports = {
  verbose: true,
  'testPathIgnorePatterns': [
    '/node_modules/'
  ],
  'collectCoverageFrom': [
    './src/**/*.js',
    '!**/node_modules/**'
  ]
}
