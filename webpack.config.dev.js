const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: './src/components/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                exclude: /\.module\.less$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            strictMath: true,
                            noIeCompat: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new TerserJSPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new PrettierPlugin(),
        new HtmlWebpackPlugin(
            {
                'template': './src/index.html',
                'minify': {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
                'hash': true,
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3007,
            server: { baseDir: ['./build']},
        }),

    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'build'),
    //     compress: true,
    //     port: 9000,
    //     open: 'Google Chrome',
    //     open: true,
    // },
    resolve: {
        extensions: [ '.tsx', '.components', '.js', '.json' ],
    },
};