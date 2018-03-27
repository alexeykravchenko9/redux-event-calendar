const webpack = require('webpack');
const path = require('path');
// const json = require('./file.json');

module.exports = {

    target: "node",
    entry: "./server/app.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "lib.node.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:"babel-loader"
            }
        ]
    }

};