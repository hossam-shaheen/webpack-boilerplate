const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require("./webpack.config.js");

module.exports = merge(common,{
    optimization: {
        minimizer: [
            new TerserJSPlugin({
               
            }), 
            new OptimizeCSSAssetsPlugin({
                filename: '[name].[contenthash].css',
            })
        ],
      },
    mode:"production",
   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundel.js'
      },
    module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
        },
        
     ],
    },
    plugins: [
       
        new MiniCssExtractPlugin({            
            filename: '[name].[contenthash].css'
        })
    ],
   
    
})