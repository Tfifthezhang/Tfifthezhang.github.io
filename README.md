# TF Zhang'Log

个人图文博客：https://tfifthezhang.github.io/

## 日常写作

- 文章：`src/content/posts/`，使用 Markdown。
- 配图：`src/assets/images/`，建议每篇文章一个目录。
- 站点标题、简介和链接：`astro-paper.config.ts`。
- 关于页面：`src/content/pages/about.md`。

首页按时间展示文章卡片，摘要使用文章头部的 `description`。文章页会从 Markdown 标题自动生成可折叠目录，并估算阅读时间；不需要手工维护目录。

个人平台链接填写在 `astro-paper.config.ts` 的 `socials` 中，会显示在首页简介下方和页脚。常用平台名包括 `github`、`x`、`linkedin`、`mail`（邮箱地址使用 `mailto:` 前缀）；没有图标的平台也会显示文字链接。`shareLinks` 则控制文章底部的分享入口。

文章头部示例（日期填写实际发布日期）：

```yaml
---
title: 文章标题
pubDatetime: 2026-10-09T09:00:00+08:00
description: 一句话摘要。
tags:
  - 随笔
draft: false
---
```

## 本地预览与发布

使用 `.nvmrc` 中指定的 Node 版本。安装依赖：

```bash
npm ci
```

开发预览（保存后更新页面）：

```bash
npm exec astro -- dev --background
```

管理开发服务器：`npm exec astro -- dev status`、`npm exec astro -- dev logs`、`npm exec astro -- dev stop`。

发布前检查：

```bash
npm run build
npm run preview
```

预览满意后提交并推送：

```bash
git add .
git commit -m "Publish new post"
git push
```

推送到 `main` 后，GitHub Actions 自动构建并发布到 GitHub Pages。文章列表、归档、标签和搜索索引自动更新。

## 模板来源

基于 [AstroPaper](https://github.com/satnaing/astro-paper)，保留原作者的 MIT 许可，见 `LICENSE`。
