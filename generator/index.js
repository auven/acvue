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
        'apicloud wifiSync --project ./acapp/widget --updateAll false --port 8686',
      wifiupdateall:
        'apicloud wifiSync --project ./acapp/widget --updateAll true --port 8686'
    },
    devDependencies: {
      handlebars: '^4.0.14',
      portfinder: '^1.0.19',
      runjs: '^4.3.2',
      '@commitlint/cli': '^7.3.2',
      '@commitlint/config-conventional': '^7.3.1',
      'cz-conventional-changelog': '^2.1.0',
      husky: '^1.3.1'
    },
    config: {
      commitizen: {
        path: './node_modules/cz-conventional-changelog'
      }
    },
    husky: {
      hooks: {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
      }
    }
  })

  // 公共基础目录和文件
  api.render('./template/default')

  // 配置文件
  api.render({
    './.gitignore': './template/_gitignore',
    './.browserslistrc': './template/_browserslistrc',
    './.editorconfig': './template/_editorconfig',
    './.prettierrc': './template/_prettierrc.json'
  })
}
