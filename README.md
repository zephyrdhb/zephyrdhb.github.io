# 个人博客使用指南

## 博客简介
这是一个基于Jekyll的静态博客网站，支持Markdown格式的文章发布，具有响应式设计和简洁的界面。

## 快速开始

### 本地运行
1. 确保已安装Ruby和Jekyll
2. 克隆本仓库
3. 安装依赖：
   ```bash
   bundle install
   ```
4. 启动本地服务器：
   ```bash
   bundle exec jekyll serve
   ```
5. 访问 `http://localhost:4000` 查看博客

## 新增博客文章

1. 在 `_posts` 目录下创建新的Markdown文件
2. 文件名格式：`YYYY-MM-DD-标题.md` (例如：`2023-11-15-我的第一篇博客.md`)
3. 文件头部添加YAML Front Matter：
   ```markdown
   ---
   layout: post
   title: "文章标题"
   date: YYYY-MM-DD HH:MM:SS +/-TTTT
   categories: [分类1, 分类2]
   tags: [标签1, 标签2]
   ---
   ```
4. 在下方编写文章内容（使用Markdown语法）

## 博客配置

主要配置文件为 `_config.yml`，可修改以下内容：
- 网站标题和描述
- 作者信息
- 社交链接
- 其他Jekyll设置

## 部署

1. 提交更改到Git仓库
2. 如果使用GitHub Pages，推送后会自动构建
3. 如需手动部署：
   ```bash
   JEKYLL_ENV=production bundle exec jekyll build
   ```
   然后将 `_site` 目录内容上传到服务器

## 更多帮助

- [Jekyll官方文档](https://jekyllrb.com/docs/)
- [Markdown语法指南](https://www.markdownguide.org/)