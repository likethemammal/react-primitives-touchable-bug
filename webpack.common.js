const path = require('path')

const plugins = [

]

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        index: './index.js',
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, './lib'),
        publicPath: '/',

        library: 'OSSReactExample',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                    'source-map-loader',
                ],
            }
        ]

    },
    plugins,
}

module.exports = config
