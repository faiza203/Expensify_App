const path = require("path");
module.exports = {
    entry : "./src/script.js",
    output:{
        path: path.join(__dirname , "scripts"),
        filename : "app.js"
    },
    module: {
        rules: [{
            loader: "babel-loader" ,
            test: /\.js$/ ,
            exclude : /node_modules/,
        }]
    }
}