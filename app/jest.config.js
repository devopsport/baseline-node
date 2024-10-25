module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/js/**/*.js'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  };
  