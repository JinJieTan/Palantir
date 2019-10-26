
```
+ config            // webpack配置文件夹
+ image             // gitHub的图片存储文件夹
- package.json      // 项目依赖说明文件夹
+ .babelrc            // babel的配置文件
+ .eslintrc.js        // eslint的配置文件
+ .prettierrc         // .prettier的配置文件
+ src                 // 源码文件夹
  + main              // 主进程代码
    - main.js         // 软件入口文件
  + renderer          // 渲染进程代码
    + App             // 主窗口
      + assets        // 资源文件夹
      + components    // 组件文件夹
      + Dva-model     // dva的model文件夹
      + ErrorBoundary // React错误边缘
      + Login         // 登陆的组件
      + Video         // 短视频组件  
      + globalstyle   // 全局的样式文件
      + IM            // IM模块文件
      + App.jsx       // 根组件文件
      + routes.js     // 路由文件
      + index.html    // html模板文件
    + ...             // 如果有其它窗口就建立新的文件夹
    + utills          // 通用工具类函数文件夹
      + API           // ajax请求的封装接口文件夹
      + Pubsub        // 自定义事件类文件夹
- global.config.js    // 全局配置的开发文件
```