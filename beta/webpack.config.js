module.exports = {
    entry:{
        loader:"./js/loader.js",
        nodes:"./js/nodeloader.js"
    },
    output:{
        path: __dirname + "/js/libs",
            filename: "[name].js"
    }
}

