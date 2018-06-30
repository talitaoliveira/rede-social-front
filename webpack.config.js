const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let enviroment = process.env.NODE_ENV;
//let enviroment = process.env.NODE_ENV.trim();


console.log(`============ NODE_ENV: ${enviroment} ============`);

plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]

// TODO: mode option when generate min - fallback to production insteand of development when run npm start - https://webpack.js.org/concepts/mode/

// Check enviroment and set some plugins when production
if (enviroment === 'production') {
    console.log(" ============ PRODUCTION!!! ============ ");
    plugins.push(new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(enviroment)
        }
    }));
    plugins.push(new UglifyJSPlugin());
}else{
    console.log(" ============ DEVELOPMENT!!! ============ ");
}


module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist"
    }
};