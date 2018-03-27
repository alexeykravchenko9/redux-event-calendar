const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const outputPath = path.resolve(__dirname, './dist');

const webpackConfig = {
    entry:{
        app: [
            path.resolve(__dirname, './src/index.js')
        ]
    },
    output: {
        path: outputPath,
        filename: "[name].js"
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]

            },
            {
                test:/\.(scss|css)$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: 'true',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: 'true',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]

            },
            {
                test:/\.(gif|png|jpg|jpeg|svg)/,
                exclude: /node-modules/,
                include: path.resolve(__dirname, './src/assets'),
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            alwaysWriteToDisk: true,
            path: outputPath
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0'
    }
};

module.exports = webpackConfig;
