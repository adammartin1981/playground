module.exports = function (wallaby) {
  return {
    files: ['src/**/*.ts*', '!src/**/*.test.ts*'],

    tests: ['src/**/*.test.ts*'],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        jsx: 'React',
      }),
    },

    env: {
      type: 'node',
    },

    testFramework: 'jest',
  }
}
