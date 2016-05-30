var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/commonschunkplugin');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './main',
    output: {
        path: path.join(__dirname + '/wwwroot/', 'Built'),
        filename: '[name].bundle.js',
        chunkFilename: "[id].chunk.js"
    }, plugins: [
      new WebpackNotifierPlugin(),
      new CommonsChunkPlugin({ filename: "commons.js", name: "commons" })
    ],
    module: {
        loaders: [
            //{ test: /\.js$/, loader: 'script' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            //{ test: path.join(__dirname, 'es6'), loader: 'babel-loader' },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            //{ test: /\.css$/, loader: 'style!css' },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: 'url' }
        ]
    },
    //sassLoader: { includePaths: [path.resolve(__dirname, "./Content")]}
};