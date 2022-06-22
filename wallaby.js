module.exports = (wallaby) => {
  console.log('wallaby', wallaby);

  return {
    autoDetect: true,
    files: ['src/**/*.tsx?'],
    tests: ['src/**/*.spec.tsx?'],
    trace: true,
  };
};
