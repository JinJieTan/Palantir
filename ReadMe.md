#背景

一个兴趣驱动的技术项目, 皆在打造一个桌面端的跨平台项目，涉及音视频，IM（即时通讯）方面, 与商业无关。

如有问题, 请联系

```
453089136@qq.com  Peter 谭金杰
```

> 本项目于 2019 年 10 月 17 日启动

# 整体技术架构

![image](https://github.com/JinJieTan/Desktop-TikTok/blob/master/image/Desktop-TikTok.jpeg)

#development

初次下载使用 推荐使用 npm 下载

服务器已经部署到阿里云,我们只需要专注开发即可

然后全局安装 nodemon 使用:

```
npm i nodemon -g

```

然后

```


npm i


npm run dev

npm start


```

访问端口号由 `global.config.js`文件控制 ，可以手动更改,如果出现端口号被占用，可以使用`netstat`杀掉那条占用，也可以更换端口号

项目本身使用了`electron`,本身它依赖于`Chromium`,国内使用`cnpm`下载是最快的。

如果你下载依赖比较慢，我建议你使用`cnpm`（即使你设置了淘宝镜像）

# 涉及到的技术

1. `React`
2. `Electron`
3. `Webscoket`协议和`UDP`连接等
4. `TCP`长链接
5. `Node.js`
6. `Express`框架
7. `Ant-Desgin`等`UI`框架
8. `WebRTC`技术
9. `Restfult`风格接口开发
10. `极致的性能优化`

> 短期暂不加入打包和 C++插件等功能，因为搭建那些环境比较复杂，一步一步来。

#开发流程/分支规范

开发者更新代码后，切换到`dev`分支。

首先 `git checkout dev`

然后 `git checkout -b develop/name` 这里的`name`是作为开发者，你的名字的简写.

每个人对应有一个自己的分支 `develop/name`， 此分支作为自己独立的开发分支。

如果需要开发新功能， 请在此分枝上新建 feature 分支， 比如：

```
git checkout -branch feature/hello-world

```

feature 分支开发完成完成之后， 合并到自己的 `develop/name` 分支。

确认无误后， 提 PR 到 `dev`分支.

最所有代码合并在`dev`分支 `master`分支作为正式版本的分支。

#PR 规范

提交 PR 的时候， 注意带一些简要的信息提示， 比如：

- docs: 只改到了文档
- feat: 加入一个新特性
- fix: 修复一个 bug
- perf: 性能优化的修改
- refactor: 项目代码重构
- style: 格式修改，如空格、增加分号
- test: 增加遗漏的测试用例，或更正测试用例

后面会完善代码检查, 配置 commit-lint 等。

#### 整体技术架构



#### 项目后期需要的环境

1.全局安装 Redis

2.全局安装 Visual Studio,win10 SDK（windows 系统），或者全局安装 Xcode(Mac 系统)，特殊情况可以跟我交流，可以采用第三方形式运行编译 C++插件

3.全局安装 mongodb、mysql（网上寻找）

4.全局安装 docker

5.后期需要的再补充

#### 项目目前的服务端代码编写完成情况

1.登陆鉴权已经完成，使用 redis 持久化存储

2.短视频、第一帧图片的服务器已经搭建好，等部署，同第一条

3.webRTC 视频直播代码已经准备好，等部署和项目进度推荐

4.IM 文字通讯，待完善

5.其余中间件 UDP 链接等待完善

6.如果你想要获取后端核心代码，那么你需要对项目提出相当的贡献，我将开源给你。否则就会以云端形式部署

#### 目前核心的问题点

1.git 代码管理，提交代码需要提交 pull request

2.根据原型图开发，分组分模块

3.技术栈的学习,核心点的理解

#### 接口文档

restful 接口 返回`{code:0 或 1,data:xxx}`

code 为 0 即成功，1 即为失败

data 是返回的说明
