module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts*',
      { pattern: 'tests/**/*.snap' },
      '!src/**/*.test.ts*',
    ],

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

    setup: function (w) {
      const fs = require('fs')
      const path = require('path')
      let originalWriteFileSync = fs.writeFileSync

      // only replacing the function once per process
      if (!originalWriteFileSync.alreadyReplaced) {
        fs.writeFileSync = function (filename, data, options) {
          // only syncing the file to the local project folder
          // if it's a .snap file saved in wallaby cache
          if (
            path.extname(filename) === '.snap' &&
            filename.indexOf(w.projectCacheDir) === 0
          ) {
            originalWriteFileSync(
              path.join(
                w.localProjectDir,
                path.relative(w.projectCacheDir, filename)
              ),
              data,
              options
            )
          }

          return originalWriteFileSync(filename, data, options)
        }
        fs.writeFileSync.alreadyReplaced = true
      }
    },
  }
}
