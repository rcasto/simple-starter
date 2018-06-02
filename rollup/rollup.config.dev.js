import babel from 'rollup-plugin-babel';

export default {
  input: 'public/scripts/index.js',
  output: {
    file: 'dist/public/index.js',
    format: 'iife',
    name: 'Index',
    sourcemap: 'inline'
  },
  watch: {
    chokidar: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};