const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';

// noinspection JSUnusedGlobalSymbols
module["exports"] = {
    runtimeCompiler: true,
    configureWebpack: config => {
        if (isProduction) {
            // minimize bundle size by gzip
            config.plugins.push(new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
            // minimize bundle size by exclude ant-design icon elements
            config.resolve = {
                alias: {
                    "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./antdIcons.config.js")
                }
            }
        }
    }
};