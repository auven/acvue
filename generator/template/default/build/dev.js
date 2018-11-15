const { run } = require('runjs')
const portfinder = require('portfinder')
const utils = require('./utils')
const rawArgv = process.argv.slice(2)

portfinder.basePort = 8080
portfinder.getPort((err, port) => {
  if (err) {
    throw err
  } else {
    // 判断是开发 app
    if (rawArgv.includes('--app')) {
      utils.writeAppConfigXml(port)
      process.env.VUE_APP_PLATFORM = 'app'
    } else {
      process.env.VUE_APP_PLATFORM = 'h5'
    }
    run(`vue-cli-service serve`)
  }
})
