/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const moduleNameMapper = {
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
};
export const setupFilesAfterEnv = [
  '<rootDir>/src/setupTests.ts'
];