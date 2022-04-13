// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
// const config = {
//     verbose: true,
//   };
  
//   module.exports = config;
  
//   // Or async function
//   module.exports = async () => {
//     return {
//       verbose: true,
//     };
//   };

  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
    ],
}
