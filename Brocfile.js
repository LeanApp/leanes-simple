const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const Rollup = require("broccoli-rollup");
const babel = require("rollup-plugin-babel");
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const globals = require('rollup-plugin-node-globals');
const { terser } = require('rollup-plugin-terser');

const appRoot = __dirname + '/src';

const extensions = [".ts", ".js"];

// TODO: needs to improve this config for precompilation src files to nodejs runtime (not browser)

const dev = new Rollup(appRoot, {
  inputFiles: ["**/*.js"],
  annotation: "leanes-simple",
  rollup: {
    input: __dirname + "/src/index.js",
    external: [
      'crypto',
      'net',
      'dns',
      'stream',
      'buffer',
      'events',
      'querystring',
      'url'
    ],
    plugins: [
      json({
        extensions,
        include: 'node_modules/**',
        preferConst: true,
        indent: '  ',
        compact: true,
        namedExports: true
      }),
      nodeResolve({
        extensions,
        browser: true,
        preferBuiltins: false,
      }),
      commonjs({
        include: 'node_modules/**',
        preferBuiltins: false
      }),
      babel({
        extensions,
        sourceMap: true,
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-env"
        ],
        plugins: [
          "@babel/plugin-syntax-flow",
          ["flow-runtime", {
            "assert": true,
            "annotate": true
          }],
          "@babel/plugin-transform-flow-strip-types",
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ],
      }),
      globals({
        sourceMap: false,
        process: false,
        buffer: false,
        dirname: true,
        filename: true,
        global: false,
        baseDir: process.cwd() + "/src/"
      }),
    ],
    output: {
      name: "leanes-simple",
      dir: __dirname + '/app',
      entryFileNames: 'index.dev.js',
      format: "cjs",
      sourcemap: true,
    },
  }
});

const prod = new Rollup(appRoot, {
  inputFiles: ["**/*.js"],
  annotation: "leanes-simple",
  rollup: {
    input: __dirname + "/src/index.js",
    external: [
      'crypto',
      'net',
      'dns',
      'stream',
      'buffer',
      'events',
      'querystring',
      'url'
    ],
    plugins: [
      json({
        extensions,
        include: 'node_modules/**',
        preferConst: true,
        indent: '  ',
        compact: true,
        namedExports: true
      }),
      nodeResolve({
        extensions,
        browser: true,
        preferBuiltins: false,
      }),
      commonjs({
        include: 'node_modules/**',
        preferBuiltins: false
      }),
      babel({
        extensions,
        sourceMap: true,
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-env"
        ],
        plugins: [
          "@babel/plugin-syntax-flow",
          "@babel/plugin-transform-flow-strip-types",
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ],
      }),
      globals({
        sourceMap: false,
        process: false,
        buffer: false,
        dirname: true,
        filename: true,
        global: false,
        baseDir: process.cwd() + "/src/"
      }),
    ],
    output: {
      name: "leanes-simple",
      dir: __dirname + '/app',
      entryFileNames: 'index.min.js',
      format: "cjs",
      sourcemap: false,
        plugins: [
          terser()
        ]
    },
  }
});

module.exports = options => {
  if (options.env == 'production') {
    return mergeTrees([prod], { annotation: "Final output" });
  } else if (options.env == 'development') {
    return mergeTrees([dev], { annotation: "Final output" });
  }
};
