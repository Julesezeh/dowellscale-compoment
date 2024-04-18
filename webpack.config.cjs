const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/main.jsx"),
    output: {
        path: path.resolve("build"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), 'src'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    externals: {
        react: "react"
    },
};
