const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: path.join(__dirname,'./src/mian.js'),
  output: {
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js'
  },
  plugins: [   //配置插件节点
    new VueLoaderPlugin()
  ],
  modules: {   //配置第三方加载器
    rules:[  //所有第三方模块匹配规则

      // 配置所有css以及css预编译器的loader
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],   //配置处理.css文件的loader
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      // 配置图片格式的loader
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: ['url-loader?limit=3020&name=[hash:8]-[name].[ext]']     //配置图片路径的规则，limit给定的值是图片大小，单位是字节，如果引用的图片大于或等于给定的limit值，则不会转为base64格式的字符串,反之则会被转为base64格式
      },

      // 配置处理字体的loader
      // {

      // },

      // 配置vue文件的loader
      {
        test: /\.vue/,
        use: ['vue-loader']
      },

    ]
  }    
  
}