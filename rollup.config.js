import NodeLicense from 'rollup-plugin-node-license';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'index.js',
  external: ['fs'],
  interop: false,
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  plugins: [
    resolve(),
    new NodeLicense(),
  ],
};
