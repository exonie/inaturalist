var path = require('path'),
    assets_path = path.join('app', 'assets', 'javascripts'),
    webpack_assets_path = path.join('app', 'assets', 'javascripts', 'webpack');

var config = {
  context: path.resolve(assets_path),
  entry: {
    // list out the various bundles we need to make for different apps
    'observations-identify': './webpack/observations/identify/webpack-entry'
  },
  output: {
    // each bundle will be stored in app/assets/javascripts/[name].output.js
    // for inclusion in the asset pipeline, make app/assets/javascripts/[name]-bundle.js
    filename: '[name]-webpack.js',
    path: path.resolve(assets_path)
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(webpack_assets_path)
  },
  module: {
    loaders: [
      // run everything through babel. See .babelrc for babel-specific
      // configs, include react defaults that allow it to deal with jsx
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
      // { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ]
  }
};
module.exports = config;
