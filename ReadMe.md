> 本项目于 2019 年 10 月 17 日启动

皆在打造一个桌面端的跨平台项目，涉及音视频，IM（即时通讯）方面

有问题请联系

```
453089136@qq.com    Peter 谭金杰

```

初次下载使用 推荐使用
```
npm i 

npm dev 

npm start 
```

访问端口号由 `global.config.js `文件控制 ，可以手动更改,如果出现端口号被占用，可以使用`netstat`杀掉那条占用，也可以更换端口号

#### 本项目不用于任何商业性质

涉及到的技术栈

1. `React`
2. `Electron`
3. `webscoket`协议和`UDP`连接等
4. `TCP`长链接
5. `Node.js`
6. `express`框架
7. `Ant-Desgin`等`UI`框架
8. `webRTC`技术
9. `Restfult`风格接口开发
10. 极致的性能优化等

> 短期暂不加入打包和 C++插件等功能，因为搭建那些环境比较复杂，一步一步来。

请开发者切换到`dev`分支
首先 `git checkout dev`

然后 `git checkout -b dev/(name)` 这里的`name`是作为开发者，你的名字的简写

每个人对应有一个自己的分支,`dev/name`

最所有代码合并在`dev`分支 `master`分支作为正式版本的分支

由于项目本身使用了`electron`,本身它依赖于`Chromium`,国内使用`cnpm`下载是最快的

如果你下载依赖比较慢，我建议你使用`cnpm`（即使你设置了淘宝镜像）

#### 开发人员必读

代码只能推送到`dev`分支 每次先拉取最新的`dev`分支

需要推送当前自己分支代码时，先提交到本地

然后`git checkout dev`

`git merge dev/(name)`合并你分支的最新代码

`git push origin dev:dev`推送代码到`dev`分支即可


#### 整体技术架构

![image](https://github.com/JinJieTan/Desktop-TikTok/blob/master/image/Desktop-TikTok.jpeg)
