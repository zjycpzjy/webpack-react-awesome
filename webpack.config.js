const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
//    entry:'./src/index.js',\
   devtool:'eval',
   entry:{
      main:'./src/index.js'
   },
   output:{
       filename:'[name].js',
       path:path.resolve(process.cwd(),'dist'),
   },
   module:{
       rules:[
           {
              test:/\.css$i/,
              use:['style-loader','css-loader']
           },
           { 
               test: /\.txt$/, 
               use: 'raw-loader' 
           },
           {
               test:/\.js$/,
               exclude:'/node_modules/',
               use:{
                   loader:'babel-loader',
                    options:{
                         presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
           },

    ]
   },
   plugins:[
       new HtmlWebpackPlugin({
           template:'./index.html'
       }),
       new CleanWebpackPlugin()
   ],
   devServer:{
       contentBase:path.join(__dirname,'dist'),
       hot:true,
       port:9000,
       open:true
   },
   performance: {
	hints: false
   },
   resolve:{
       extensions:[".js",".jsx"],
       mainFiles:["index"],
       alias:{
           '@':path.resolve(__dirname,'src')
       } 
   }
}
//会在项目中生成dist文件夹，把src下面的index文件打包到dist文件夹下面
//entry 可以写成字符串 也可以写成对象
//output [name]标示entry里面的key,这里就表示main,搜索src下面的index会打包成mian文件。如果entry为字符串默认为main
