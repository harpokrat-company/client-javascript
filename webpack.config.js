var path = require('path');
var CopyPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: {
        'harpokrat-client': './src/index.ts'
    },
    externals: [
        nodeExternals()
    ],
    output: {
        path: path.resolve(__dirname, 'dist', 'bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '@harpokrat/client',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: []
};

