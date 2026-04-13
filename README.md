# 游戏官网项目

这是一个为 iOS 游戏设计的官网项目，用于满足 App Store 审核要求并展示游戏信息。

## 项目特点

- ✅ 完整的隐私政策和用户协议模板
- ✅ 响应式设计，支持移动端和桌面端
- ✅ 基于 Next.js 14 + Tailwind CSS
- ✅ 零成本部署到 Vercel
- ✅ 自动 HTTPS 和全球 CDN
- ✅ 符合 App Store 审核要求

## 页面结构

- **首页** (`/`) - 游戏展示、特色功能、截图展示、系统要求
- **支持页面** (`/support`) - 常见问题 FAQ、联系表单
- **隐私政策** (`/privacy`) - 完整的隐私政策模板
- **用户协议** (`/terms`) - 完整的用户协议模板

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

在浏览器中访问 [http://localhost:3000](http://localhost:3000)

### 3. 自定义内容

在部署前，请修改以下内容：

- 游戏名称、简介、特色功能
- 联系邮箱和公司信息
- 隐私政策中的第三方 SDK 列表
- 用户协议中的具体条款
- 添加游戏截图到 `public` 目录

详细说明请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 4. 部署到 Vercel

```bash
# 推送到 GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/game-website.git
git push -u origin main

# 在 Vercel 网站导入 GitHub 仓库即可自动部署
```

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel
- **托管**: GitHub

## 项目结构

```
game-website/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 首页
│   ├── support/           # 支持页面
│   ├── privacy/           # 隐私政策
│   └── terms/             # 用户协议
├── components/            # React 组件
│   ├── Header.tsx         # 导航栏
│   └── Footer.tsx         # 页脚
├── public/                # 静态资源
│   └── (放置游戏截图和图标)
├── DEPLOYMENT.md          # 详细部署指南
└── README.md              # 项目说明
```

## App Store 提交

部署完成后，您将获得以下 URL 用于 App Store Connect：

- **支持 URL**: `https://your-domain.com/support`
- **隐私政策 URL**: `https://your-domain.com/privacy` (必填)
- **营销 URL**: `https://your-domain.com` (可选)

## 自定义指南

### 修改游戏名称

1. `app/layout.tsx` - 第 16-17 行
2. `components/Header.tsx` - 第 10 行
3. `components/Footer.tsx` - 第 7 行
4. `app/page.tsx` - 第 9 行

### 修改联系邮箱

1. `components/Footer.tsx` - 第 30 行
2. `app/support/page.tsx` - 第 145 行
3. `app/privacy/page.tsx` - 第 234 行
4. `app/terms/page.tsx` - 第 289 行

### 添加游戏截图

将截图放入 `public/screenshots/` 目录，然后修改 `app/page.tsx` 第 107-122 行。

## 常见问题

### 如何更新网站内容？

修改代码后，推送到 GitHub，Vercel 会自动重新部署。

```bash
git add .
git commit -m "Update content"
git push origin main
```

### 如何绑定自定义域名？

1. 在 Vercel 项目设置中添加域名
2. 在域名注册商处配置 DNS 解析
3. 等待 DNS 生效（几分钟到 48 小时）

详细步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 如何添加联系表单功能？

推荐使用 [Formspree](https://formspree.io/) 免费服务，详见部署指南。

## 成本说明

- **Vercel 托管**: 免费（个人项目）
- **域名**: ¥50-100/年（可选）
- **总成本**: ¥0-100/年

## 合规提示

⚠️ **重要**: 本项目提供的隐私政策和用户协议为模板示例，实际使用时请根据您的游戏实际情况修改，特别是：

- 第三方 SDK 列表
- 数据收集范围
- 广告功能说明
- 儿童隐私保护

建议咨询法律顾问以确保合规。

## 许可证

MIT License

## 支持

如有问题，请查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 或提交 Issue。

