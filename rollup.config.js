import NodeLicense from 'rollup-plugin-node-license';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'index.js',
  external: ['fs'],
  output: {
    file: pkg.main,
    format: 'cjs',
    interop: false,
  },
  plugins: [
    resolve(),
    new NodeLicense(),
  ],
};
