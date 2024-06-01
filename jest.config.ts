export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  'testEnvironment':'jsdom',
  moduleNameMapper:{
    "\\.(css|less|scss)$":"identity-obj-proxy",
  }
}