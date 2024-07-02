// jest.config.js
module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)', // Transforma los módulos en node_modules excepto axios
    ],
  };