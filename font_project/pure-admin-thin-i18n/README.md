<h1>vue-pure-admin精简版（国际化版本）</h1>



## 介绍

精简版是基于 [vue-pure-admin](https://github.com/pure-admin/vue-pure-admin) 提炼出的架子，包含主体功能，更适合实际项目开发，打包后的大小在全局引入 [element-plus](https://element-plus.org) 的情况下仍然低于 `2.3MB`，并且会永久同步完整版的代码。开启 `brotli` 压缩和 `cdn` 替换本地库模式后，打包大小低于 `350kb`



## 注意事项

如果pnpm dev控制台出现 'NODE_OPTIONS' 不是内部或外部命令，也不是可运行的程序或批处理文件。

请执行以下命令

```js
npm install -g win-node-env
```

