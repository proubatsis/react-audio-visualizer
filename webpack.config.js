module.exports = {
    entry: "./app/app.jsx",
    output: {
        filename: "app.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    modulesDirectories: [
        "node_modules"
    ]
};
