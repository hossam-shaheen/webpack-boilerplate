const path = require('path');
const merge = require('webpack-merge');
const common = require("./webpack.config.js");

module.exports = merge(common,{    
    mode:"development",   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundel.js'
      },
    module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
        },
     ],
    },
    
})