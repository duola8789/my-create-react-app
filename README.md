输入法数据统计后台。

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

## 学习文档

- [Create React App](https://github.com/facebook/create-react-app)
- [开发模式](https://facebook.github.io/create-react-app/docs/deployment)
- [代码分割](https://facebook.github.io/create-react-app/docs/code-splitting)
- [打包分析](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [开发渐进式的Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [高级配置](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [build后压缩失败](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)