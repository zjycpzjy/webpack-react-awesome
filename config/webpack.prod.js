// const path = require('path')
const {merge} = require('webpck-merge')
const commonConfig = require('./webpack.common')
const prodConfig = {
    mode:'production',
    devtool:'cheap-module-source-map',
    plugins:[
        new Webpack.HotModuleReplacementPlugin()    ]
}
module.exports = merge(commonConfig,prodConfig)