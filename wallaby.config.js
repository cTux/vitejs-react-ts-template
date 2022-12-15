module.exports = () => ({
  autoDetect: true,
  files: [
    'src/components/*/*.ts',
    'src/components/*/*.tsx',
    'src/components/*/tests/driver.tsx',
  ],
  tests: ['src/components/*/tests/*.spec.ts'],
});
