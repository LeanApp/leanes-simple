// const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
// const concat = require('broccoli-concat');
const replacer = require('broccoli-string-replace');
// const Rollup = require("broccoli-rollup");
// const babel = require("rollup-plugin-babel");
const WatchedDir = require('broccoli-source').WatchedDir;
// const nodeResolve = require('rollup-plugin-node-resolve');
// const commonjs = require('rollup-plugin-commonjs');
// const json = require('rollup-plugin-json');
// const globals = require('rollup-plugin-node-globals');
// const { terser } = require('rollup-plugin-terser');
// const pkg = require('./package.json');
// import replace from '@rollup/plugin-replace';
// import run from '@rollup/plugin-run';
// import multi from '@rollup/plugin-multi-entry';
// import glob from 'glob';
// import fs from 'fs';
// import path from 'path';
// const replace = require('@rollup/plugin-replace');

const appRoot = __dirname + '/src';

// const extensions = [".ts", ".js"];

// const filePathes = glob.sync(`${__dirname}/src/**/*`)
//   .map((asPath) => {
//     try {
//       return [asPath, fs.statSync(asPath).isFile()]
//     } catch (err) {
//       return [asPath, false]
//     }
//   })
//   .filter(([asPath, abIsFile]) => abIsFile)
//   // .map(([asPath, abIsFile]) => asPath)
//   .reduce((prev, [asPath, abIsFile]) => {
//     const pathObj = path.parse(asPath);
//     prev[path.relative(`${__dirname}/src`, `${pathObj.dir}/${pathObj.name}`)] = asPath;
//     return prev;
//   }, {});

// console.log('Files:', filePathes);
// const js = new Rollup(funnel(appRoot, {include: ['**/*.js'], destDir: '/'}), {
// const js = new WatchedDir(appRoot);

const devJS = replacer(new WatchedDir(appRoot), {
  files: [ '**/*.js' ],
  patterns: [{
    match: '__LeanES__',
    replacement: '@leansdk/leanes/lib/index.dev',
  }, {
    match: '__ConfigurableAddon__',
    replacement: '@leansdk/leanes-configurable-addon/lib/index.dev',
  }, {
    match: '__FsUtilsAddon__',
    replacement: '@leansdk/leanes-fs-utils-addon/lib/index.dev',
  },]
});
const dev = esTranspiler(devJS, {
  filterExtensions: ["js"],
  browserPolyfill: false,
  sourceMap: 'inline',
  // sourceMap: true,
  exclude: "node_modules/**",
  presets: [
    // "@babel/preset-env"
    ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    ["flow-runtime", {
      "assert": true,
      "annotate": true
    }],
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
  ],
});
// const js = funnel(_js, {include: ['**/*.js'], destDir: 'tmp'})
// const dev = new Rollup(new WatchedDir('tmp'), {
// // const dev = new Rollup(js, {
// // const dev = new Rollup(appRoot, {
//   inputFiles: ["**/*.js"],
//   // inputFiles: [__dirname + "/src/**/*.js"],
//   annotation: "leanes-simple",
//   rollup: {
//     input: "index.js",
//     // input: __dirname + "/tmp/index.js",
//     // input: __dirname + "/src/index.js",
//     // input: filePathes,
//     // input: {
//     //   exports: true,
//     //   // entryFileName: filePathes,
//     //   include: filePathes,
//     //   exclude: [`${__dirname}/src/interfaces/*`]
//     // },
//     external: [
//       // 'path', 'child_process',
//       'readline', 'cron',
//       'crypto',
//       'net',
//       'dns',
//       'stream',
//       'buffer',
//       'events',
//       'querystring',
//       'url',
//       '@leansdk/leanes/lib/index.dev',
//       '@leansdk/leanes-configurable-addon/lib/index.dev',
//       '@leansdk/leanes-fs-utils-addon/lib/index.dev'
//     ],
//     plugins: [
//       replace({
//         __LeanES__: '@leansdk/leanes/lib/index.dev',
//         __ConfigurableAddon__: '@leansdk/leanes-configurable-addon/lib/index.dev',
//         __FsUtilsAddon__: '@leansdk/leanes-fs-utils-addon/lib/index.dev'
//       }),
//       json({
//         extensions,
//         include: 'node_modules/**',
//         preferConst: true,
//         indent: '  ',
//         compact: true,
//         namedExports: true
//       }),
//       nodeResolve({
//         extensions,
//         browser: false,
//         preferBuiltins: false,
//       }),
//       commonjs({
//         include: 'node_modules/**',
//         preferBuiltins: false
//       }),
//       // multi(),
//       // babel({
//       //   extensions,
//       //   sourceMap: true,
//       //   exclude: "node_modules/**",
//       //   // runtimeHelpers: false,
//       //   // runtimeHelpers: true,
//       //   presets: [
//       //     // "@babel/preset-env"
//       //     ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
//       //   ],
//       //   plugins: [
//       //     "@babel/plugin-syntax-flow",
//       //     ["flow-runtime", {
//       //       "assert": true,
//       //       "annotate": true
//       //     }],
//       //     "@babel/plugin-transform-flow-strip-types",
//       //     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//       //     // "babel-plugin-parameter-decorator",
//       //     ["@babel/plugin-proposal-class-properties", { "loose": true }],
//       //     // "@babel/plugin-transform-runtime",
//       //   ],
//       // }),
//       // globals({
//       //   sourceMap: false,
//       //   process: false,
//       //   buffer: false,
//       //   dirname: true,
//       //   filename: true,
//       //   global: false,
//       //   baseDir: process.cwd() + "/src/"
//       // }),
//     ],
//     output: {
//       name: "leanes-simple",
//       // file: __dirname + '/dev/index.js',
//       file: 'index.js',
//       // dir: __dirname + '/dev',
//       // dir: 'dev',
//       // entryFileNames: 'index.dev.js',
//       // entryFileNames: '[name].js',
//       // entryFileName: '[name]55.js',
//       // chunkFileNames: '[name]-[hash].js',
//       // manualChunks: ((id) => {
//       //   console.log('dfdfdf', id);
//       //   return id
//       // }),
//       format: "cjs",
//       // preserveModules: true,
//       // preserveModulesRoot: `${__dirname}/src`,
//       sourcemap: true,
//     },
//     // watch: {
//     //   buildDelay: 0,
//     //   clearScreen: true,
//     //   skipWrite: false,
//     //   exclude: 'node_modules/**',
//     //   include: `${__dirname}/src/**`,
//     //   chokidar: {
//     //     useFsEvents: true,
//     //     // usePolling: true,
//     //   },
//     // }
//   }
// });
// const dev = esTranspiler(js, {
//   filterExtensions: ["js"],
//   browserPolyfill: false,
//   sourceMap: 'inline',
//   // sourceMap: true,
//   // destDir: 'dev',
//   exclude: "node_modules/**",
//   // runtimeHelpers: false,
//   // runtimeHelpers: true,
//   presets: [
//     // ['env', {
//     //   'targets': {
//     //     'browsers': ['last 2 versions']
//     //   }
//     // }]
//     // ['env', {
//     //   'targets': {
//     //     'node': '14.9'
//     //   }
//     // }],
//     // "@babel/preset-env"
//     ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
//   ],
//   plugins: [
//     "@babel/plugin-syntax-flow",
//     ["flow-runtime", {
//       "assert": true,
//       "annotate": true
//     }],
//     "@babel/plugin-transform-flow-strip-types",
//     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//     // "babel-plugin-parameter-decorator",
//     ["@babel/plugin-proposal-class-properties", { "loose": true }],
//     // "@babel/plugin-transform-runtime",
//   ],
//
//   // moduleIds: true,
//
//   // Transforms /index.js files to use their containing directory name
//   // getModuleId: function (name) {
//   //   console.log('>>>>>> getModuleId', name);
//   //   name = pkg.name + '/' + name;
//   //   return name.replace(/\/index$/, '');
//   // },
//
//   // // Fix relative imports inside /index's
//   // resolveModuleSource: function (source, filename) {
//   //   console.log('>>>>>> resolveModuleSource', source, filename);
//   //   var match = filename.match(/(.+)\/index\.\S+$/i);
//   //
//   //   // is this an import inside an /index file?
//   //   if (match) {
//   //     var path = match[1];
//   //     return source
//   //       .replace(/^\.\//, path + '/')
//   //       .replace(/^\.\.\//, '');
//   //   } else {
//   //     return source;
//   //   }
//   // }
// });
// const dev = concat(_dev, {inputFiles: ['**/*.js'], outputFile: __dirname + '/dev/index.js', sourceMapConfig: { enabled: true }})

const prodJS = replacer(appRoot, {
  files: [ '**/*.js' ],
  patterns: [{
    match: '__LeanES__',
    replacement: '@leansdk/leanes',
  }, {
    match: '__ConfigurableAddon__',
    replacement: '@leansdk/leanes-configurable-addon',
  }, {
    match: '__FsUtilsAddon__',
    replacement: '@leansdk/leanes-fs-utils-addon',
  },]
});
const prod = esTranspiler(prodJS, {
  filterExtensions: ["js"],
  browserPolyfill: false,
  // sourceMap: 'inline',
  // sourceMap: true,
  exclude: "node_modules/**",
  presets: [
    // "@babel/preset-env"
    ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
  ],
});
// const prod = new Rollup(appRoot, {
//   inputFiles: ["**/*.js"],
//   annotation: "leanes-simple",
//   rollup: {
//     // input: __dirname + "/src/index.js",
//     input: filePathes,
//     external: [
//       'readline', 'cron',
//       'crypto',
//       'net',
//       'dns',
//       'stream',
//       'buffer',
//       'events',
//       'querystring',
//       'url',
//       '@leansdk/leanes',
//       '@leansdk/leanes-configurable-addon',
//       '@leansdk/leanes-fs-utils-addon',
//     ],
//     plugins: [
//       replace({
//         __LeanES__: '@leansdk/leanes',
//         __ConfigurableAddon__: '@leansdk/leanes-configurable-addon',
//         __FsUtilsAddon__: '@leansdk/leanes-fs-utils-addon'
//       }),
//       json({
//         extensions,
//         include: 'node_modules/**',
//         preferConst: true,
//         indent: '  ',
//         compact: true,
//         namedExports: true
//       }),
//       nodeResolve({
//         extensions,
//         browser: false,
//         preferBuiltins: false,
//       }),
//       commonjs({
//         include: 'node_modules/**',
//         preferBuiltins: false
//       }),
//       babel({
//         extensions,
//         sourceMap: false,
//         exclude: "node_modules/**",
//         runtimeHelpers: true,
//         presets: [
//           // "@babel/preset-env"
//           ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
//         ],
//         plugins: [
//           "@babel/plugin-syntax-flow",
//           "@babel/plugin-transform-flow-strip-types",
//           ["@babel/plugin-proposal-decorators", { "legacy": true }],
//           "babel-plugin-parameter-decorator",
//           ["@babel/plugin-proposal-class-properties", { "loose": true }],
//           "@babel/plugin-transform-runtime",
//         ],
//       }),
//       // globals({
//       //   sourceMap: false,
//       //   process: false,
//       //   buffer: false,
//       //   dirname: true,
//       //   filename: true,
//       //   global: false,
//       //   baseDir: process.cwd() + "/src/"
//       // }),
//     ],
//     output: {
//       // name: "leanes-simple",
//       dir: __dirname + '/app',
//       // entryFileNames: 'index.min.js',
//       // entryFileNames: '[name].js',
//       // chunkFileNames: '[name]-[hash].js',
//       // manualChunks: ((id) => id),
//       format: "cjs",
//       // preserveModules: true,
//       sourcemap: false,
//     },
//   }
// });

module.exports = options => {
  if (options.env == 'production') {
    return mergeTrees([prod], { annotation: "Final output", overwrite: true });
  } else if (options.env == 'development') {
    return mergeTrees([dev], { annotation: "Final output", overwrite: true });
  }
};
