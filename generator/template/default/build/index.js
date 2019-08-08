const { run } = require('runjs')
const utils = require('./utils')
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')

// 判断是开发 app
if (rawArgv.includes('--app')) {
  utils.writeAppConfigXml()
  utils.writeAppManifestXml()
  process.env.VUE_APP_PLATFORM = 'app'
} else {
  process.env.VUE_APP_PLATFORM = 'h5'
}
run(`vue-cli-service build ${args}`)
