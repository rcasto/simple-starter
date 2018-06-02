import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'public/scripts/index.js',
  output: {
    file: 'dist/public/index.js',
    format: 'iife',
    name: 'Index'
  },
  plugins: [
    uglify(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};