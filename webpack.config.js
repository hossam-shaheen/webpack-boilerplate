
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
       
    entry: {
        main:'./src/app.js',
        vendor:"./src/test.js"        
    },
 
    module: {
      rules: [
        
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images',
                  },
              },
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
     ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),       
    ],
   
    
}