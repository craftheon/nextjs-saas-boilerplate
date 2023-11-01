const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts");
const postcss = require("rollup-plugin-postcss");
const { terser } = require("rollup-plugin-terser");
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const image = require('@rollup/plugin-image');

const buildEntry = function (entryName) {
  return [
    {
      input: `src/${entryName}.ts`,
      output: [
        {
          file: `dist/cjs/${entryName}.js`,
          format: "cjs",
          sourcemap: true,
        },
        {
          file: `dist/esm/${entryName}.js`,
          format: "esm",
          sourcemap: true,
        },
      ],
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        postcss(),
        terser(),
        image()
      ],
    },
    {
      input: `dist/esm/types/${entryName}.d.ts`,
      output: [{ file: `dist/${entryName}.d.ts`, format: "esm" }],
      plugins: [dts.dts()],
      external: [/\.css$/]
    },
  ]
}


module.exports = [
  ...buildEntry('index'),
  ...buildEntry('sections'),
  ...buildEntry('themes')
]