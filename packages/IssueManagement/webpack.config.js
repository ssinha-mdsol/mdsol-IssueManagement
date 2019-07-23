const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js",
        publicPath: "build/"
    },
    module : {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/
            },
            {
                use: [ MiniCssExtractPlugin.loader,"css-loader"],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
          }),
          new HtmlWebpackPlugin ({
            template : './public/index.html'
        })
    ]
}