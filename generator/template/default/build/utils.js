'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
// 获取本地 ip
exports.getIP = () => {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {
        return alias.address
      }
    }
  }
}

// 写入 APICloud config.xml
exports.writeAppConfigXml = port => {
  const fs = require('fs')
  const handlebars = require('handlebars')
  const content = fs.readFileSync(resolve('./config.xml')).toString()
  const result = handlebars.compile(content)({
    src: port ? 'http://' + exports.getIP() + ':' + port : 'dist/index.html'
  })
  exports.createFolder(resolve('./acapp/widget/config.xml'))
  fs.writeFileSync(resolve('./acapp/widget/config.xml'), result)
}

// 创建文件
exports.createFolder = to => {
  //文件写入
  const path = require('path')
  const fs = require('fs')
  const sep = path.sep
  const folders = path.dirname(to).split(sep)
  let p = ''
  while (folders.length) {
    p += folders.shift() + sep
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p)
    }
  }
}
