const path = require("path");
module.exports = {
    entry: "./src/redux/ReduxExpensify.js",
    output: {
        path: path.join(__dirname, "scripts"),
        filename: "app.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"]
        }
        ]
    }, devServer: {
        historyApiFallback: true,
    }
}