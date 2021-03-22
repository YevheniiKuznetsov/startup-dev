let path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
const webpack = require('webpack');
const icons = require('glyphicons');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
             },
            
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            
            /*
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            },
            */
            {
                test: /\.(png|jpg|gif|svg|otf|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
            } 
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
        }),
        /*
        extractCSS,
        extractLESS,
        */
    ],
}
module.exports = conf;