
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
    │   ├── styles //样式
    │   ├── utils //工具库
    │   └── views //页面
    ├── tsconfig.json
    ├── yarn-error.log
    └── yarn.lock
```

## todolist

#### 1. 框架搭建：done

| todo               | solution                                            | status |
| ------------------ | --------------------------------------------------- | ------ |
| 状态管理           | Mobx   <font color='green'>6.3.2</font>             | ✅      |
| 路由               | react-router-dom   <font color='green'>5.2.0</font> | ✅      |
| 路由嵌套动态可配置 | react-router-dom                                    | ✅      |
| 路由懒加载         | lazy&Suspense                                       | ✅      |
| ui库               | Antd    <font color='green'>4.16.11</font>          | ✅      |
| css预处理          | scss  <font color='green'>1.37.5</font>             | ✅      |
| js                 | typescript. <font color='green'>4.1.2</font>        | ✅      |
| 接口请求           | Axios.   <font color='green'>0.14.0</font>          | ✅      |
| 数据模拟           | Mockjs   <font color='green'>1.1.0</font>           | ✅      |
| 代码风格管理       | eslint + husky + prettier + lint-staged             | ✅      |
| 单元测试           | jest   <font color='green'>26.6.0</font>            | ✅      |

## <font color='red'>注意事项</font>

##### <font color='red'>1. Mobx函数式组件和class组件写法不同</font>

```javascript
//class组件 @inject @observer
import React from 'react';
import { observer, inject } from 'mobx-react';
import { STORE_HOME, HomeStore   } from '@/stores';
@inject(STORE_HOME)
@observer
class List extends React.Component<{ [STORE_HOME]: HomeStore }>  { 
  render() {
   const {
      count,
      increment
    } = this.props[STORE_HOME];
      return <div>
          <Button onClick={increment}>{count}</Button>
      </div>;
  }
}
export default List;
```

```javascript
//函数式组件 observer(com)
import React from 'react';
import { observer } from 'mobx-react';
import { useHomeStore } from '@/stores';
interface Props{};
const Home: React.FC = (Props) => {
    const {
        decrement,
        count
      } = useHomeStore();      
    return (<div>
        <Jump url="/list" buttonName="去列表页" />
    </div>);
};
  
export default observer(Home);
```
