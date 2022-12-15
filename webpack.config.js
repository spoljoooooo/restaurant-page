const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
    module: {
        rules: [
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          { 
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
      }),
    ],
};