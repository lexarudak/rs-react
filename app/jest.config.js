export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/vendor/**',
    '!**/src/base/**',
    '!**/vite.config.ts',
    '!**/appFormConfig.ts',
    '!**/src/vite-env.d.ts',
  ],
};
