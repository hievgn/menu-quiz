const path = require('path');

module.exports = {
  publicPath: './', 
  outputDir: path.resolve(__dirname, 'build'), 
  assetsDir: 'assets', 
  chainWebpack: config => {
    config.entry('app').clear().add('./src/js/main.js');
    config.output
      .filename('js/[name].js') 
      .chunkFilename('js/[name].js'); 

    config.plugin('html').tap(args => {
      args[0].filename = 'index.html'; 
      return args;
    });
  },
  css: {
    extract: {
      filename: 'css/[name].css', 
      chunkFilename: 'css/[name].css', 
    },
  },
};
