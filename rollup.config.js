import babel from 'rollup-plugin-babel';

export default {
  input: 'public/scripts/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};