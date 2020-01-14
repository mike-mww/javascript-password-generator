const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, { 
    optimization: {  
        minimize: true, 
        minimizer: [     
            new TerserPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ] 
    }
});