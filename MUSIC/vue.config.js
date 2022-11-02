module.exports={
    lintOnSave:false,
    // 方法一 
    devServer: {
      proxy: 'http://music.163.com'
    }
  
    // 方法二
    // devServer: {
    //     proxy: {
    //       '/api': {
    //         target: 'https://api.imjad.cn/cloudmusic/',
    //         // 需要将请求接口的api改为空字符串，才能获取服务器里面的数据
    //         pathRewerite:{"^/api":''},
    //         // 这个是另一个webstore 编译软件的配置
    //         ws: true,
    //         // 告诉代理服务器要不要欺骗（欺骗就是将代理服务器的端口号同化为远程服务器）远程服务器 
    //         changeOrigin: true
    //       }
    //     }
    //   }
  }