module.exports = {
    clearMocks: true,
    setupFilesAfterEnv: ['regenerator-runtime/runtime', './setup.js'],
    testPathIgnorePatterns: [
        "/node_modules/",
    ],
    coverageProvider: "v8"
  };
  