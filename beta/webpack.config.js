var webpack = require("webpack");
module.exports = {
    entry:{
        loader:"./js/loader.js",
        vendor:"./js/vendor.js"
    },
    output:{
        path: __dirname + "/public/",
        filename: "[name].js",
        publicPath:"/exsight/beta/public/"
    },
    module: {
        loaders: [
            {
                test: require.resolve("jquery2"),
                loader: "expose-loader?$!expose-loader?jQuery"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:"file-loader?name=[path][name].[ext]"
            }
        ]
    },
}

