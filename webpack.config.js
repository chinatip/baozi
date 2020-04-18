var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            { test : /\.(js)$/, use:'babel-loader' },
            { test : /\.css$/, use:['style-loader', 'css-loader'] },
            { test : /\.s[ac]ss$/i, use:['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.xlsx$/, loader: "webpack-xlsx-loader" }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'index.html'
        })
    ],

}
