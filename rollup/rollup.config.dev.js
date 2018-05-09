import babel from 'rollup-plugin-babel';

export default {
  input: 'public/scripts/index.js',
  output: {
    file: 'dist/public/scripts/index.js',
    format: 'iife',
    name: 'Index',
    sourcemap: 'inline'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};