# {{ name }}

> {{ description }}

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

### 识别开发环境

- `process.env.PLATFORM` : `app` (app 端) | `web` (web 端)

在我们的项目中，可以使用它来判断当前的开发环境，便于区分不同平台。
