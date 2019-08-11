# APICloud-vue-quickstart

APICloud 结合 vue 快速开发 App ，可同时开发 web 端和 app 端。

[APICloud 官方文档](https://docs.apicloud.com/) | [Vue 官方文档](https://cn.vuejs.org/)

## 开发

安装项目依赖
``` bash
npm install
```

### 开发 web 端

``` bash
# 本地开发，热更新
npm run dev

# 打包
npm run build
```

### 开发 app 端

``` bash
# 本地开发，热更新
npm run dev@app

# 打包
npm run build@app
```

手机下载 [AppLoader](https://docs.apicloud.com/Download/download) ，运行
``` bash
# 全局安装 apicloud-cli
npm install -g apicloud-cli

# 启动 wifi 服务
npm run wifistart

# wifi 增量同步
npm run wifiupdate

# wifi 全量同步
npm run wifiupdateall
```

### 识别开发环境

- `process.env.VUE_APP_PLATFORM` : `app` (app 端) | `h5` (web 端)

在我们的项目中，可以使用它来判断当前的开发环境，便于区分不同平台。