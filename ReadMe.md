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

初次下载使用 推荐使用

```
npm i 

// terminal 1:
npm run dev 

// terminal 2:
npm start 
```

> Note: 访问端口号由 `global.config.js `文件控制 ，可以手动更改,如果出现端口号被占用，可以使用`netstat`杀掉那条占用，也可以更换端口号

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

如果需要开发新功能， 请在此分枝上新建feature 分支， 比如：

```
git checkout -branch feature/hello-world

```

feature 分支开发完成完成之后， 合并到自己的 `develop/name` 分支。

确认无误后， 提 PR 到 `dev`分支.

最所有代码合并在`dev`分支 `master`分支作为正式版本的分支。

#PR 规范

提交PR的时候， 注意带一些简要的信息提示， 比如：

- docs: 只改到了文档
- feat: 加入一个新特性
- fix: 修复一个 bug
- perf: 性能优化的修改
- refactor: 项目代码重构
- style: 格式修改，如空格、增加分号
- test: 增加遗漏的测试用例，或更正测试用例

后面会完善代码检查, 配置commit-lint 等。



