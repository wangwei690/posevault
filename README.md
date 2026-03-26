# PoseVault - 拍照姿势库

一个精美的拍照姿势分享网站，支持上传、收藏、推荐和搜索拍照姿势。

![Preview](https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80)

## 功能特点

- 🏠 **首页展示** - 瀑布流网格展示各种拍照姿势
- 📤 **上传姿势** - 支持拖拽上传自己的拍照姿势
- ❤️ **收藏功能** - 收藏喜欢的姿势
- ✨ **热门推荐** - 每日精选和热门姿势推荐
- 🔍 **搜索筛选** - 按分类和关键词搜索

## 部署到 GitHub Pages

### 方式一：手动部署

1. 创建 GitHub 仓库
2. 将项目文件推送到仓库
3. 进入仓库设置 → Pages
4. Source 选择 "Deploy from a branch"
5. Branch 选择 "main"，目录选择 "/ (root)"
6. 点击 Save

### 方式二：自动部署 (GitHub Actions)

项目已配置 GitHub Actions，每次推送到 main 分支将自动部署。

1. 将代码推送到 GitHub
2. 进入仓库的 Actions 页面
3. 等待部署完成
4. 在 `https://username.github.io/posevault/` 访问

## 本地运行

直接用浏览器打开 `index.html` 即可预览。

或使用简单的 HTTP 服务器：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

然后访问 http://localhost:8000

## 技术栈

- 纯 HTML/CSS/JavaScript
- LocalStorage 数据存储
- 响应式设计
- CSS 动画效果
- Google Fonts (Playfair Display, DM Sans)

## 项目结构

```
posevault/
├── index.html      # 主页面
├── css/
│   └── styles.css  # 样式文件
├── js/
│   └── app.js     # JavaScript 逻辑
└── README.md      # 项目说明
```

## 许可证

MIT License
