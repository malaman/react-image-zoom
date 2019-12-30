var path = require('path');
var webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './example/index.js'
    ],
    devServer: {
        hot: false,
        inline: true,
        contentBase: './example_dist',
        port: 8080,
        disableHostCheck: true,
    },
    output: {
        path: path.join(__dirname, './example/'),
        filename: 'bundle.js',
        publicPath: '/web-assets/dist/'
    },
    plugins: [
        new webpack.DefinePlugin(
          {
              'process.env': {
                  'NODE_ENV': JSON.stringify('local'),
              }
          }
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8000' })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test   : /\.scss$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use : 'file-loader'
            }
        ]
    }
};
