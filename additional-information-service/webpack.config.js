const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  externals: {
    // define newrelic as an external library
    // http://webpack.github.io/docs/configuration.html#externals
    newrelic: true
  }
};