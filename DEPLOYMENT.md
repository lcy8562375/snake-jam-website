# 游戏官网部署指南

本指南将帮助您将游戏官网部署到 Vercel，实现快速上线。

## 前置准备

在开始部署前，请确保您已经：

1. ✅ 完成了游戏素材的准备（图标、截图、宣传图）
2. ✅ 修改了网站内容（游戏名称、简介、联系邮箱等）
3. ✅ 审核了隐私政策和用户协议，确保符合实际情况
4. ✅ 注册了 GitHub 账号
5. ✅ 注册了 Vercel 账号（可使用 GitHub 账号登录）

---

## 第一步：自定义网站内容

在部署前，您需要修改以下文件中的占位符内容：

### 1. 全局配置

**文件：`app/layout.tsx`**

```typescript
export const metadata: Metadata = {
  title: "游戏名称 - 休闲益智游戏",  // 修改为您的游戏名称
  description: "一款精彩的休闲益智游戏，带给您轻松愉快的游戏体验",  // 修改为您的游戏简介
};
```

### 2. 导航栏和页脚

**文件：`components/Header.tsx`**
- 第 10 行：修改 "游戏名称" 为您的实际游戏名称

**文件：`components/Footer.tsx`**
- 第 7 行：修改游戏名称
- 第 8-10 行：修改游戏简介
- 第 30 行：修改联系邮箱
- 第 39 行：修改公司名称

### 3. 首页内容

**文件：`app/page.tsx`**
- 第 9 行：游戏名称
- 第 12-13 行：游戏简介
- 第 56-58 行：三个游戏特色的标题和描述
- 第 145-151 行：系统要求和版本信息

### 4. 隐私政策

**文件：`app/privacy/page.tsx`**
- 第 8 行：更新日期
- 第 45-48 行：根据实际使用的第三方 SDK 修改
- 第 234-237 行：修改联系邮箱、公司名称、注册地址

### 5. 用户协议

**文件：`app/terms/page.tsx`**
- 第 8 行：更新日期
- 第 13 行：修改公司名称
- 第 289-292 行：修改联系邮箱、公司名称、注册地址

### 6. 添加游戏截图

将您的游戏截图放入 `public` 目录：

```
public/
├── screenshots/
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
├── icon.png          # 游戏图标
└── banner.png        # 宣传横幅
```

然后修改 `app/page.tsx` 中的截图展示部分（第 107-122 行）。

---

## 第二步：本地测试

在部署前，先在本地测试网站是否正常运行。

### 1. 安装依赖

```bash
cd game-website
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 在浏览器中访问

打开浏览器访问 `http://localhost:3000`，检查：

- ✅ 所有页面是否正常显示
- ✅ 导航链接是否正常工作
- ✅ 移动端菜单是否正常展开/收起
- ✅ 隐私政策和用户协议内容是否正确
- ✅ 联系邮箱等信息是否已更新

---

## 第三步：推送到 GitHub

### 1. 初始化 Git 仓库

```bash
cd game-website
git init
git add .
git commit -m "Initial commit: Game website"
```

### 2. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com/)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库名称（如 `game-website`）
4. 选择 "Public" 或 "Private"
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 3. 推送代码到 GitHub

```bash
git remote add origin https://github.com/你的用户名/game-website.git
git branch -M main
git push -u origin main
```

---

## 第四步：部署到 Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. **访问 Vercel**
   - 打开 [https://vercel.com/](https://vercel.com/)
   - 点击 "Sign Up" 或 "Log In"
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择您刚才创建的 GitHub 仓库 `game-website`
   - 点击 "Import"

3. **配置项目**
   - **Project Name**: 保持默认或自定义
   - **Framework Preset**: 自动检测为 Next.js
   - **Root Directory**: 保持默认 `./`
   - **Build Command**: `npm run build`（自动填充）
   - **Output Directory**: `.next`（自动填充）
   - 点击 "Deploy"

4. **等待部署完成**
   - 部署通常需要 1-3 分钟
   - 完成后会显示 "Congratulations!" 页面
   - 您会获得一个 `.vercel.app` 域名

### 方法二：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署项目
cd game-website
vercel

# 按照提示操作：
# - Set up and deploy? Yes
# - Which scope? 选择您的账号
# - Link to existing project? No
# - What's your project's name? game-website
# - In which directory is your code located? ./
# - Want to override the settings? No

# 部署到生产环境
vercel --prod
```

---

## 第五步：绑定自定义域名（可选）

如果您购买了域名（如 `yourgame.com`），可以绑定到 Vercel：

### 1. 在 Vercel 中添加域名

1. 进入您的项目页面
2. 点击 "Settings" → "Domains"
3. 输入您的域名（如 `yourgame.com`）
4. 点击 "Add"

### 2. 配置 DNS 解析

Vercel 会提供 DNS 配置信息，您需要在域名注册商处添加以下记录：

**方式一：使用 A 记录**
```
Type: A
Name: @
Value: 76.76.21.21
```

**方式二：使用 CNAME 记录**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. 等待 DNS 生效

DNS 解析通常需要几分钟到 48 小时生效。您可以使用以下命令检查：

```bash
nslookup yourgame.com
```

---

## 第六步：获取 URL 用于 App Store 提交

部署完成后，您将获得以下 URL：

### 1. 支持 URL（Support URL）
```
https://yourgame.com/support
或
https://your-project.vercel.app/support
```

### 2. 隐私政策 URL（Privacy Policy URL）- 必填
```
https://yourgame.com/privacy
或
https://your-project.vercel.app/privacy
```

### 3. 营销 URL（Marketing URL）- 可选
```
https://yourgame.com
或
https://your-project.vercel.app
```

**在 App Store Connect 中填写这些 URL：**

1. 登录 [App Store Connect](https://appstoreconnect.apple.com/)
2. 选择您的应用
3. 进入 "App 信息" 或 "版本信息"
4. 填写上述 URL
5. 保存并提交审核

---

## 第七步：更新网站内容

当您需要更新网站内容时：

### 1. 修改代码

```bash
cd game-website
# 修改文件...
```

### 2. 提交并推送

```bash
git add .
git commit -m "Update game description"
git push origin main
```

### 3. 自动部署

Vercel 会自动检测到 GitHub 仓库的更新，并自动重新部署。
通常 1-2 分钟后，新版本就会上线。

---

## 常见问题

### Q1: 部署失败怎么办？

**检查以下几点：**
- 确保 `package.json` 中的依赖版本正确
- 检查是否有语法错误（运行 `npm run build` 测试）
- 查看 Vercel 部署日志中的错误信息

### Q2: 如何查看部署日志？

1. 进入 Vercel 项目页面
2. 点击 "Deployments"
3. 选择最新的部署记录
4. 点击 "View Build Logs"

### Q3: 如何回滚到之前的版本？

1. 进入 Vercel 项目页面
2. 点击 "Deployments"
3. 找到之前的成功部署
4. 点击右侧的 "..." → "Promote to Production"

### Q4: 如何设置环境变量？

1. 进入 Vercel 项目页面
2. 点击 "Settings" → "Environment Variables"
3. 添加变量名和值
4. 选择适用环境（Production/Preview/Development）
5. 点击 "Save"

### Q5: 如何启用 HTTPS？

Vercel 自动为所有域名提供免费的 SSL 证书，无需额外配置。

### Q6: 如何添加联系表单功能？

推荐使用 [Formspree](https://formspree.io/)：

1. 注册 Formspree 账号
2. 创建一个新表单
3. 获取表单 endpoint URL
4. 修改 `app/support/page.tsx` 中的表单 action：

```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  {/* 表单内容 */}
</form>
```

---

## 性能优化建议

### 1. 图片优化

使用 Next.js 的 Image 组件自动优化图片：

```tsx
import Image from 'next/image';

<Image
  src="/screenshots/screenshot-1.png"
  alt="游戏截图"
  width={1080}
  height={1920}
  className="rounded-xl"
/>
```

### 2. 添加 SEO 元数据

在每个页面添加 metadata：

```tsx
export const metadata = {
  title: "支持中心 - 游戏名称",
  description: "获取游戏帮助和技术支持",
};
```

### 3. 启用分析工具

添加 Google Analytics 或百度统计：

1. 在 `app/layout.tsx` 中添加跟踪代码
2. 或使用 Vercel Analytics（免费）

---

## 安全检查清单

在正式上线前，请确认：

- ✅ 隐私政策中的第三方 SDK 列表与实际使用一致
- ✅ 联系邮箱真实有效且能正常接收邮件
- ✅ 用户协议中的公司信息准确无误
- ✅ 没有暴露敏感信息（API 密钥、数据库密码等）
- ✅ 所有外部链接都是 HTTPS
- ✅ 移动端和桌面端都能正常访问

---

## 成本说明

### Vercel 免费版限制

- ✅ 无限项目
- ✅ 100 GB 带宽/月
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署
- ⚠️ 商业使用需升级到 Pro 版（$20/月）

### 域名成本

- .com 域名：约 ¥50-100/年
- .cn 域名：约 ¥30-50/年（需要 ICP 备案）

---

## 下一步

网站部署完成后，您可以：

1. ✅ 将隐私政策 URL 填写到 App Store Connect
2. ✅ 在游戏内添加官网链接
3. ✅ 在社交媒体分享官网链接
4. ✅ 定期更新游戏截图和版本信息
5. ✅ 监控网站访问数据，优化内容

---

## 技术支持

如果在部署过程中遇到问题：

- **Vercel 文档**: https://vercel.com/docs
- **Next.js 文档**: https://nextjs.org/docs
- **GitHub 帮助**: https://docs.github.com/

祝您部署顺利！🎉
