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
    dependencies: {
      eruda: '^1.5.8'
    },
    devDependencies: {
      handlebars: '^4.0.14',
      portfinder: '^1.0.19',
      runjs: '^4.3.2',
      'svg-sprite-loader': '^4.1.6',
      ...(options.useCommitlint
        ? {
            '@commitlint/cli': '^7.3.2',
            '@commitlint/config-conventional': '^7.3.1',
            'cz-conventional-changelog': '^2.1.0',
            husky: '^1.3.1'
          }
        : {}),
      ...(options.useVW
        ? {
            cssnano: '^4.1.10',
            'cssnano-preset-advanced': '^4.0.7',
            'postcss-aspect-ratio-mini': '^1.0.1',
            'postcss-cssnext': '^3.1.0',
            'postcss-import': '^12.0.1',
            'postcss-px-to-viewport': '^1.1.1',
            'postcss-url': '^8.0.0',
            'postcss-write-svg': '^3.0.1'
          }
        : {})
    },
    ...(options.useCommitlint
      ? {
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
        }
      : {})
  })

  // 公共基础目录和文件
  api.render('./template/default')

  // 配置文件
  api.render({
    './.gitignore': './template/_gitignore',
    './.browserslistrc': './template/_browserslistrc',
    './.editorconfig': './template/_editorconfig',
    './.prettierrc': './template/_prettierrc.json',
    ...(options.useCommitlint
      ? {
          './.commitlintrc.js': './template/_commitlintrc.js'
        }
      : {}),
    ...(options.useVW
      ? {
          './postcss.config.js': './template/postcss.config.js'
        }
      : {})
  })
}
