import license from 'rollup-plugin-license';
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
    license({ thirdParty: { output: 'dependencies.txt' } }),
  ],
};
