module.exports = (api, options, rootOptions) => {
  // 安装一些基础公共库
  api.extendPackage({
    scripts: {
      dev: 'node build/dev.js',
      'dev@app': 'node build/dev.js --app',
      build: 'node build/index.js',
      'build@app': 'node build/index.js --app',
      wifistart: 'apicloud wifiStart --port 8686',
      wifiupdate:
        'apicloud wifiSync --project ./src --updateAll false --port 8686',
      wifiupdateall:
        'apicloud wifiSync --project ./src --updateAll true --port 8686'
    },
    devDependencies: {
      handlebars: '^4.0.12',
      portfinder: '^1.0.19',
      runjs: '^4.3.2'
    }
  })

  // 公共基础目录和文件
  api.render('./template/default')

  // 配置文件
  api.render({
    './.gitignore': './template/_gitignore',
    './.browserslistrc': './template/_browserslistrc'
  })
}
