# 个人网站项目

这是一个基于React的个人网站项目，包含主页、简历和博客功能。

## GitHub Pages 部署指南

1. 构建项目
```bash
pnpm build
```

2. 将dist/static目录下的所有文件提交到GitHub仓库的gh-pages分支

3. 在GitHub仓库设置中启用GitHub Pages，选择gh-pages分支作为源

4. 访问 `https://[你的用户名].github.io/[仓库名]/` 查看网站

## 开发
```bash
pnpm install
pnpm dev
```