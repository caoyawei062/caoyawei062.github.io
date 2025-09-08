# Visual Studio Code (VSCode)

## 📖 VSCode 介绍

Visual Studio Code（VSCode）是一个由 Microsoft 开发的开源代码编辑器，支持多种编程语言，拥有丰富的插件生态，适合现代 Web 开发。它轻量级、高性能，同时具备强大的功能，是前端开发者的首选编辑器之一。

### 🌟 核心特性

- **🚀 轻量级** - 启动速度快，占用资源少
- **🔧 可扩展** - 丰富的插件生态系统
- **🎯 智能感知** - 强大的代码补全和语法高亮
- **🔍 集成调试** - 内置调试器，支持多种语言
- **📱 跨平台** - 支持 Windows、macOS、Linux
- **🌐 Git 集成** - 内置 Git 版本控制

![vscode](https://code.visualstudio.com/assets/home/home-screenshot-mac.png)

## 🚀 前端开发必备插件

### 📝 代码编辑增强

#### 1. **Prettier - Code formatter**

- **功能**：代码格式化工具
- **特点**：支持多种语言，统一团队代码风格
- **配置**：

```json
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.tabWidth": 2
}
```

#### 2. **ESLint**

- **功能**：JavaScript/TypeScript 代码检查
- **特点**：实时语法检查，代码质量保证
- **推荐配置**：

```json
{
  "eslint.enable": true,
  "eslint.format.enable": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  }
}
```

#### 3. **Auto Rename Tag**

- **功能**：自动重命名配对的 HTML/XML 标签
- **特点**：修改开始标签时自动更新结束标签

#### 4. **Bracket Pair Colorizer 2**

- **功能**：为括号添加颜色匹配
- **特点**：快速识别括号配对，减少语法错误

### ⚛️ React 开发

#### 5. **ES7+ React/Redux/React-Native snippets**

- **功能**：React 代码片段集合
- **常用片段**：
  - `rfce` - React 函数组件（导出）
  - `useState` - useState Hook
  - `useEffect` - useEffect Hook
  - `rcc` - React 类组件

#### 6. **React PropTypes Intellisense**

- **功能**：PropTypes 智能提示
- **特点**：自动补全组件属性类型

### 🟢 Vue 开发

#### 7. **Vetur**

- **功能**：Vue.js 官方插件
- **特点**：语法高亮、智能感知、格式化
- **支持**：Vue 单文件组件(.vue)

#### 8. **Vue 3 Snippets**

- **功能**：Vue 3 代码片段
- **特点**：Composition API 代码补全

#### 9. **Vue Office**

- **功能**：Vue 文件预览和编辑增强
- **特点**：支持 Vue 文件的可视化预览、组件结构展示
- **用途**：快速查看 Vue 组件结构，提高开发效率

### 🎨 CSS/样式增强

#### 10. **CSS Peek**

- **功能**：快速查看 CSS 定义
- **特点**：Ctrl+Hover 查看样式定义

#### 11. **Tailwind CSS IntelliSense**

- **功能**：Tailwind CSS 智能提示
- **特点**：类名补全、语法高亮、悬停预览

#### 12. **Live Sass Compiler**

- **功能**：实时编译 Sass/Scss
- **特点**：自动编译，实时预览

### 🌐 前端框架工具

#### 13. **Vite**

- **功能**：Vite 项目支持
- **特点**：快速启动、HMR 支持

#### 14. **TypeScript Importer**

- **功能**：自动导入 TypeScript 模块
- **特点**：智能导入建议，减少手动输入

### 🛠️ 开发效率工具

#### 15. **Error Lens**

- **功能**：内联显示错误和警告
- **特点**：将错误信息直接显示在代码行末尾，无需悬停查看
- **优势**：快速识别问题，提高调试效率

#### 16. **Code Runner**

- **功能**：快速运行代码片段
- **特点**：支持多种语言的代码运行，一键执行
- **用途**：快速测试代码片段，无需创建完整项目

#### 17. **Live Server**

- **功能**：本地开发服务器
- **特点**：实时重载，快速预览

#### 18. **GitLens — Git supercharged**

- **功能**：增强 Git 功能
- **特点**：代码作者信息、提交历史、分支管理

#### 19. **Git History**

- **功能**：Git 历史记录查看器
- **特点**：可视化 Git 历史、分支对比、文件历史追踪
- **用途**：更直观地查看项目的 Git 历史和变更记录

#### 20. **Thunder Client**

- **功能**：REST API 客户端
- **特点**：类似 Postman，无需离开 VSCode

#### 21. **Code Spell Checker**

- **功能**：拼写检查
- **特点**：支持多语言，减少拼写错误

### 🎯 调试工具

#### 22. **Debugger for Chrome**

- **功能**：Chrome 调试器
- **特点**：在 VSCode 中调试 Chrome 应用

#### 23. **React Developer Tools**

- **功能**：React 开发者工具
- **特点**：组件树查看、状态检查

## ⚙️ VSCode 配置优化

### 用户设置（settings.json）

```json
{
  // 编辑器基础设置
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', monospace",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true,
  "editor.lineNumbers": "on",
  "editor.renderWhitespace": "boundary",

  // 自动保存和格式化
  "files.autoSave": "onDelay",
  "files.autoSaveDelay": 1000,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": false,

  // 文件关联
  "files.associations": {
    "*.jsx": "javascriptreact",
    "*.tsx": "typescriptreact"
  },

  // Emmet 设置
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "emmet.triggerExpansionOnTab": true,

  // 工作台设置
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",

  // 终端设置
  "terminal.integrated.shell.windows": "cmd.exe",
  "terminal.integrated.fontSize": 12,

  // Git 设置
  "git.enableSmartCommit": true,
  "git.confirmSync": false,

  // 扩展设置
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.requireConfig": true,
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.js": "prettier"
}
```

### 常用快捷键

| 功能         | Windows/Linux   | macOS              |
| ------------ | --------------- | ------------------ |
| 命令面板     | `Ctrl+Shift+P`  | `Cmd+Shift+P`      |
| 快速打开文件 | `Ctrl+P`        | `Cmd+P`            |
| 侧边栏显隐   | `Ctrl+B`        | `Cmd+B`            |
| 多光标选择   | `Ctrl+D`        | `Cmd+D`            |
| 整行移动     | `Alt+↑/↓`       | `Option+↑/↓`       |
| 复制整行     | `Shift+Alt+↑/↓` | `Shift+Option+↑/↓` |
| 格式化代码   | `Shift+Alt+F`   | `Shift+Option+F`   |
| 查找替换     | `Ctrl+H`        | `Cmd+Option+F`     |

## 🏗️ 项目配置文件

### .vscode/settings.json（项目级配置）

```json
{
  "eslint.workingDirectories": ["."],
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true
  }
}
```

### .vscode/extensions.json（推荐扩展）

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "usernamehw.errorlens",
    "formulahendry.code-runner",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "ritwickdey.liveserver",
    "eamodio.gitlens",
    "donjayamanne.githistory",
    "tomoki1207.pdf"
  ]
}
```

## 🎯 开发技巧

### 1. 代码片段（Snippets）

创建自定义代码片段，提高开发效率：

```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react'",
      "",
      "const ${1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  )",
      "}",
      "",
      "export default ${1:ComponentName}"
    ],
    "description": "Create a React functional component"
  }
}
```

### 2. 多项目工作区

使用工作区功能管理多个相关项目：

```json
{
  "folders": [
    {
      "name": "frontend",
      "path": "./frontend"
    },
    {
      "name": "backend",
      "path": "./backend"
    }
  ],
  "settings": {
    "typescript.preferences.includePackageJsonAutoImports": "on"
  }
}
```

### 3. 任务自动化

配置 tasks.json 自动化常用任务：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "npm start",
      "type": "shell",
      "command": "npm start",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    }
  ]
}
```

## 🚀 进阶使用

### Remote Development

- **Remote - SSH**：远程服务器开发
- **Remote - Containers**：容器化开发环境
- **GitHub Codespaces**：云端开发环境

### 性能优化

1. **禁用不必要的扩展**
2. **设置文件排除规则**
3. **使用工作区而非文件夹**
4. **定期清理缓存**

通过合理配置 VSCode 和使用这些插件，可以显著提升前端开发效率和体验。选择适合自己项目需求的插件，避免安装过多插件影响性能。
