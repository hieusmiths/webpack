const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle_all.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                   'file-loader',
                ],
            },
        ],
    },
};