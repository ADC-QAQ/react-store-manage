
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
		│   ├── mock //数据模拟
    │   ├── routes //路由
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

#### 1. 框架搭建：deadline:21/8/12

| todo               | solution                                | status |
| ------------------ | --------------------------------------- | ------ |
| 状态管理           | mobx                                    |        |
| 路由               | react-router-dom                        | ✅      |
| 路由嵌套动态可配置 | react-router-dom                        | ✅      |
| 路由懒加载         | lazy&Suspense                           | ✅      |
| ui库               | antd                                    | ✅      |
| css预处理          | scss                                    | ✅      |
| js                 | typescript                              | ✅      |
| 接口请求           | Axios                                   |        |
| 数据模拟           | Mockjs                                  | ✅      |
| 代码风格管理       | eslint + husky + prettier + lint-staged | ✅      |
| 单元测试           | jest                                    | ✅      |

