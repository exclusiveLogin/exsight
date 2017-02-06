var webpack = require("webpack");
module.exports = {
    entry:{
        loader:"./js/loader.js",
        jq:"./js/jqloader.js"
    },
    output:{
        path: __dirname + "/js/libs",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: require.resolve("jquery2"), loader: "expose-loader?$!expose-loader?jQuery" },
        ]
    }
}

