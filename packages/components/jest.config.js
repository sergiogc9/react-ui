process.env.TZ = 'UTC';

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
    './jest.setup.js'
  ],
  testRegex: '.*.test.(ts|tsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/$1'
  },
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
    'text-summary',
    'cobertura'
  ],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!src/testUtils/**', '!src/index.ts'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
};
