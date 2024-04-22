const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/App.jsx",
    output: {
        path: path.resolve("build"),
        filename: "index.js",
        libraryTarget: "commonjs2",
        library: 'RatingScale',
        libraryTarget: 'umd'

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
