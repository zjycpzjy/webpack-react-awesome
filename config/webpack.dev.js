const path = require('path')
const {merge} = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')
const devConfig = {
    mode:'development',
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase:path.join( process.cwd(),'public'),
        contentBasePublicPath: '/serve-content-base-at-this-url',
        publicPath: '/',
        port:8080,
        open:true,
        hot:false
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()    ]
}
module.exports = merge(commonConfig,devConfig)