module.exports = {
  presets: [
    [ require.resolve('@babel/preset-env') ],
    [ require.resolve('@babel/preset-react'), { runtime: 'automatic' }]
  ],
  env: {
    test: {
      plugins: [ require.resolve('@babel/plugin-transform-runtime') ]
    }
  }
};
