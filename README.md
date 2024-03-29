# @pengyin/eslint-config

FED 团队使用的 ESLint 配置。

## 安装

```shell
npm i -D eslint @babel/eslint-parser @babel/eslint-plugin @pengyin/eslint-config
```

## 使用

在 `.eslintrc.js` 中使用：

```js
module.exports = {
  extends: ["@pengyin/eslint-config"],
};
```

也可开启严格模式：

```js
module.exports = {
  extends: ["@pengyin/eslint-config/strict"],
};
```

## 扩展

### `import`

如果需要检测与 `import` 相关的规则，需要安装这个插件：

```shell
npm i -D eslint-plugin-import
```

并在 `.eslintrc.js` 中引用：

```js
module.exports = {
  extends: [
    "@pengyin/eslint-config",
    "@pengyin/eslint-config/import",
    // 或者选择严格模式
    // '@pengyin/eslint-config/import/strict',
  ],
};
```

注意这些规则会要求使用 ES6 的 `import` 来引入依赖，如果使用的是 `require` 则会出现检查错误，可禁用 `import/no-commonjs` 和 `import/unambiguous` 来解决。

### React

如果需要检测 React 相关的代码，需要安装相关插件：

```shell
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

并在 `.eslintrc.js` 中引用：

```js
module.exports = {
  extends: [
    "@pengyin/eslint-config",
    "@pengyin/eslint-config/react",
    // 或者选择严格模式
    // '@pengyin/eslint-config/react/strict',
  ],
};
```

会自动检测本地 React 的版本，默认情况下无需其它配置。

### TypeScript

如果需要检测 TypeScript 代码，需要安装相关插件：

```shell
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**除此之外，需要先安装`typescript`包，并在项目根目录有`tsconfig.json`文件**。

并在`.eslintrc.js`中引用：

```js
module.exports = {
  extends: [
    "@pengyin/eslint-config",
    "@pengyin/eslint-config/typescript",
    // 或者选择严格模式
    // '@pengyin/eslint-config/typescript/strict',
  ],
};
```

## 细节

严格版配置 `*/strict` 开启了更严格的规则。


### CSS

or

```json
{
  "extends": "@pengyin/eslint-config/css"
}
```

### SCSS

```json
{
  "extends": "@pengyin/eslint-config/scss"
}
```

### CSS with CSS Modules

```json
{
  "extends": "@pengyin/eslint-config/css-modules"
}
```

### SCSS with CSS Modules

```json
{
  "extends": "@pengyin/eslint-config/scss-modules"
}
```
