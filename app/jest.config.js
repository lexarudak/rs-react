export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
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
    '!**/coverage/**',
    '!**/vendor/**',
    '!**/src/base/**',
    '!**/src/api/**',
    '!**/vite.config.ts',
    '!**/appFormConfig.ts',
    '!**/src/vite-env.d.ts',
  ],
};
