## 说明

基于Create-React-App的React模板，eject所有配置文件，自定义的项目包括：

1. ESLint，采用了腾讯的AlloyTeam的ESLint规则
2. 组件库引入了Ant Design，实现按需引入
3. 可以采用Less编写样式

## 使用方法

配合[React-Cli-zh](https://github.com/duola8789/react-cli-zh)，可以实现类似Vue-cli脚手架的使用方式

推荐使用NPX拉取模板，避免污染全局环境：

```BASH
npx react-cli-zh init [project_name]
```

## 命令

```BASH
# 安装依赖
npm install 

# 热更新开发服务器：localhost:3000
npm start

# 使用Jest运行单元测试
npm test
npm test -- --coverage

# 打包生产文件
npm run build

# 构建显式的Webpack, Babel, ESLint等配置文件
npm run eject
```

## 代码规范

代码规范检查工具使用了ESLint，配置规则主要使用了腾讯的[AlloyTeam的ESLint规则](https://github.com/AlloyTeam/eslint-config-alloy)，有[详细的规则描述和示例](https://github.com/AlloyTeam/eslint-config-alloy)，在此基础上进行了一些个性化的定制，具体规则在根目录下的`eslintrc.js`中。

## UI组件

UI组件使用了[Ant Design](https://ant.design/index-cn)的React组件库。

脚手架工具是Create React App，为了实现代码编译时的ESLint校验，并且按需引入UI组件，使用`npm run eject`将配置文件吐出进行了自定义配置，使用了[abel-plugin-import](https://github.com/ant-design/babel-plugin-import)进行按需加载。

## 学习文档

- [Create React App](https://github.com/facebook/create-react-app)
- [开发模式](https://facebook.github.io/create-react-app/docs/deployment)
- [代码分割](https://facebook.github.io/create-react-app/docs/code-splitting)
- [打包分析](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [开发渐进式的Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [高级配置](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [build后压缩失败](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
