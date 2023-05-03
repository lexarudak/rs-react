export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  preset: 'ts-jest',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/cypress/**',
    '!**/coverage/**',
    '!**/vendor/**',
    '!**/src/base/**',
    '!**/server.ts',
    '!**/src/api/**',
    '!**/vite.config.ts',
    '!**/appFormConfig.ts',
    '!**/src/vite-env.d.ts',
    '!**cypress.config.ts',
  ],
};
