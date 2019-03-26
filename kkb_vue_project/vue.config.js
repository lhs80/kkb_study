module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: {
    devServer: {
      before (app) {
        //模拟后台服务器express
        app.get('/api/login', function (req, res) {
          const {username, passwd} = req.query

          if (username === 'lvhuaishu' && passwd == '123') {
            res.json({code: 1, token: 'jilei'})
          } else {
            res.status(401).json({code: 0, message: '用户名或者密码错误'})
          }
        })

        //获取登录用户信息
        app.get('/api/userinfo', auth, function (req, res) {
          res.json({code: 1, data: {name: 'tom', age: 20}})
        })

        //保护接口中间件
        function auth (req, res, next) {
          console.log('auth')
          if (req.header.token) {
            next()
          } else {
            //用户未授权
            res.sendStatus(401)
          }
        }

      }
    }
  }
}
