
## 技术栈

react + mobx + antd + ts

## 代码风格统一方案
eslint + husky + prettier + lint-staged

## 文件结构
```javascript
    ├── README.md
    ├── config
    │   ├── env.js
    │   ├── getHttpsConfig.js
    │   ├── jest
    │   ├── modules.js
    │   ├── paths.js
    │   ├── pnpTs.js
    │   ├── webpack.config.js
    │   └── webpackDevServer.config.js
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── scripts
    │   ├── build.js
    │   ├── start.js
    │   └── test.js
    ├── src
    │   ├── api //接口
    │   ├── assets //静态资源
    │   ├── components //全局组件
    │   ├── config //全局配置
    │   ├── index.tsx //入口
    │   ├── layout  //布局
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   ├── router //路由
    │   ├── setupTests.ts
    │   ├── store //mobx状态管理
    │   ├── styles
    │   ├── utils
    │   └── views
    ├── tsconfig.json
    ├── yarn-error.log
    └── yarn.lock
```

## todolist

#### 1. 框架搭建：路由、组件懒加载、状态管理、代码风格管理、webpack配置、目录结构、ui组件库---->deadline:21/8/12

