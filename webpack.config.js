const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/gomeet.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
            // { // added this
            //   test: /\.css$/,
            //   use: ["style-loader", "css-loader"]
            // }
        ]
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
        // modules: [ // added this
        //   path.resolve(__dirname, "./src"),
        //   path.resolve(__dirname, "./node_modules")
        // ]
    }
};