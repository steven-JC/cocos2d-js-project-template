'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './source/entry.js',
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'main.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            common: __dirname + '/source/common',
            layers: __dirname + '/source/layers',
            scenes: __dirname + '/source/scenes',
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ],
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({ minimize : true })
    ]

};
