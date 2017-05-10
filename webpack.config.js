var webpack = require('webpack');
var path = require('path');

var config = {
    context: __dirname + '/src/components',
    entry: {
        app: './index.jsx',
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;
