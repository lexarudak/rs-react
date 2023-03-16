export default {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/vite.config/**',
    '!**/vite-env.d/**',
  ],
};
