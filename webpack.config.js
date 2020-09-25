module.exports = function (config, { isClient, isDev }) {
    module: {
        rules: [{
            test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file-loader'
        }]
    }
    return config
}