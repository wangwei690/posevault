# PoseVault - 拍照姿势库

## 1. Project Overview

- **Project Name**: PoseVault (姿势库)
- **Project Type**: Single Page Web Application (Static Site)
- **Core Functionality**: 一个收集、分享、收藏和推荐拍照姿势的网站，让用户可以上传自己的拍照姿势，收藏喜欢的姿势，发现热门推荐
- **Target Users**: 喜欢拍照的用户、模特、摄影师、社交媒体用户

## 2. UI/UX Specification

### Layout Structure

**Header (固定顶部)**
- Logo: "PoseVault" 文字logo
- 导航: 首页 | 上传 | 收藏 | 推荐
- 搜索框

**Hero Section (首页)**
- 大标题: "发现完美拍照姿势"
- 副标题: "上传、收藏、推荐你喜欢的拍照姿势"
- 热门标签云

**Content Area**
- 瀑布流/网格布局展示姿势卡片
- 筛选/分类功能

**Footer**
- 版权信息
- GitHub链接

### Responsive Breakpoints
- Mobile: < 640px (单列)
- Tablet: 640px - 1024px (2列)
- Desktop: > 1024px (3-4列)

### Visual Design

**Color Palette**
- Primary: #1a1a2e (深蓝黑)
- Secondary: #16213e (深海蓝)
- Accent: #e94560 (珊瑚红)
- Background: #0f0f1a (近黑)
- Surface: #1f1f3a (深紫蓝)
- Text Primary: #ffffff
- Text Secondary: #a0a0b8
- Gradient: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)

**Typography**
- Headings: "Playfair Display", serif (优雅衬线体)
- Body: "DM Sans", sans-serif (现代无衬线)
- Logo: "Playfair Display", serif
- Font Sizes:
  - H1: 3rem (48px)
  - H2: 2rem (32px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

**Spacing System**
- Base unit: 8px
- XS: 4px, SM: 8px, MD: 16px, LG: 24px, XL: 32px, XXL: 48px

**Visual Effects**
- Card hover: translateY(-8px) + box-shadow增强
- 按钮hover: 背景渐变 + scale(1.02)
- 图片加载: fade-in动画
- 页面切换: 淡入滑动效果
- 收藏心形: 弹跳动画

### Components

**PoseCard (姿势卡片)**
- 图片区域 (16:10比例，带懒加载)
- 收藏按钮 (右上角，心形图标)
- 姿势标题
- 标签 (姿势类型: 全身/半身/面部/手势等)
- 点赞数
- 状态: default / hover / favorited

**UploadModal (上传弹窗)**
- 拖拽/点击上传区域
- 预览图片
- 标题输入
- 标签选择 (多选)
- 描述输入
- 提交按钮

**Navigation (导航)**
- Logo
- 菜单项 (带active状态)
- 搜索框

**TagBadge (标签徽章)**
- 圆角胶囊形状
- 多种颜色变体

## 3. Functionality Specification

### Core Features

1. **姿势展示 (首页)**
   - 瀑布流网格布局
   - 分类筛选 (全部/全身/半身/面部/手势/情侣/闺蜜/单人)
   - 搜索功能
   - 懒加载图片

2. **上传功能**
   - 图片上传 (支持拖拽和点击)
   - 填写标题、描述
   - 选择标签
   - 本地存储 (localStorage)

3. **收藏功能**
   - 点击心形收藏/取消收藏
   - 收藏列表页面
   - localStorage持久化

4. **推荐功能**
   - 热门推荐算法 (基于点赞+收藏数)
   - 每日推荐轮播
   - 猜你喜欢

5. **数据管理**
   - 使用localStorage存储用户数据
   - 预设示例数据 (10+个姿势)
   - 支持CRUD操作

### User Interactions
- 点击卡片查看大图
- 点击心形收藏
- 点击标签筛选
- 搜索框实时搜索
- 上传拖拽区域交互

### Edge Cases
- 无搜索结果提示
- 空收藏夹提示
- 上传失败提示
- 图片加载失败占位

## 4. Acceptance Criteria

- [x] 首页展示姿势网格
- [x] 可以切换分类筛选
- [x] 搜索功能正常
- [x] 上传弹窗可打开/关闭
- [x] 可以上传图片并保存
- [x] 收藏功能正常
- [x] 收藏列表页面正常显示
- [x] 推荐页面显示热门推荐
- [x] 响应式布局正常
- [x] 动画效果流畅
- [x] 可部署到GitHub Pages
