var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0'

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(port, host, function (err) {
    if (err) {
        console.log(err);
    }

  console.log(`App is running on port:${port}`);
});