# Apple Pay 可用卡检测

一个纯静态网页，使用 Apple 的 [`ApplePaySession.applePayCapabilities`](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/4304115-applepaycapabilities) 接口，判断当前设备的 Apple Pay 钱包中是否有**可用支付卡**。

在线访问（部署成功后）：**https://zhaoweiyang.github.io/applepay/**

## 功能

- 输入 Apple Pay 商户标识符（Merchant Identifier）后一键检测。
- 优先调用新版 `ApplePaySession.applePayCapabilities(merchantId)`，读取返回的 `paymentCredentialStatus`：

  | 返回值 | 含义 |
  | --- | --- |
  | `paymentCredentialsAvailable` | 支持 Apple Pay 且**有可用卡** |
  | `paymentCredentialsUnavailable` | 支持 Apple Pay 但**无可用卡** |
  | `paymentCredentialStatusUnknown` | 卡片状态未知（可能被限制） |
  | `applePayUnsupported` | 设备**不支持** Apple Pay |

- 旧版 Safari 不支持 `applePayCapabilities` 时，自动回退到 `canMakePayments()` + `canMakePaymentsWithActiveCard(merchantId)`。
- 自动检测平台 / 浏览器 / HTTPS 安全上下文，并展示原始返回数据。
- 全程在浏览器本地运行，**不发送任何网络请求**。

## 运行要求

- 必须在 **Apple 设备的 Safari**（iPhone / iPad / Mac）中打开。其他浏览器没有 `ApplePaySession` 接口。
- 必须通过 **HTTPS** 访问（GitHub Pages 默认即为 HTTPS）。
- 需要一个在 [Apple Developer](https://developer.apple.com/) 注册的真实**商户标识符**，例如 `merchant.com.example.app`。系统会用它来判断钱包中是否有与该商户匹配的可用卡。

## 本地预览

直接用浏览器打开 `index.html` 即可查看页面，但 Apple Pay 接口仅在 Safari + HTTPS 下才会返回真实结果。也可启动一个本地静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署到 GitHub Pages

本站是纯静态页面，使用 GitHub Pages 的 **「Deploy from a branch」** 方式直接托管，无需任何构建流程：

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**。
3. **Branch** 选择 `claude/zen-mendel-wquruq`，目录选择 **`/ (root)`**，点击 **Save**。
4. 等待一两分钟，GitHub 自动完成发布后，即可访问 `https://zhaoweiyang.github.io/applepay/`。

> 仓库根目录的 `.nojekyll` 文件会让 Pages 跳过 Jekyll，直接原样提供静态文件。
> 如果以后想从 `main` 分支发布，把代码合并到 `main` 后，在上面第 3 步选择 `main` 分支即可。

## 绑定自定义域名 + Apple Pay 域名验证

要让 `applePayCapabilities` 返回**真实**的可用卡结果，调用页面的域名必须在对应 Merchant ID 下注册并通过验证。GitHub 项目页的子路径（`*.github.io/applepay/`）无法在域名根目录放验证文件，所以这里绑定自定义域名 **`daomessage.com`**。

### 1. 配置 DNS（在 `daomessage.com` 的域名服务商处）

顶级域名用 A 记录指向 GitHub Pages：

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

（可选，IPv6 AAAA：`2606:50c0:8000::153` / `8001::153` / `8002::153` / `8003::153`；
若想同时支持 `www`，加一条 `CNAME www zhaoweiyang.github.io`。）

### 2. 在 GitHub 绑定域名

仓库 **Settings → Pages → Custom domain** 填 `daomessage.com` → Save；DNS 生效后勾选 **Enforce HTTPS**。
（仓库已含 `CNAME` 文件，内容为 `daomessage.com`。）绑定后站点根地址就是 `https://daomessage.com/`。

### 3. 在 Apple 注册并验证域名

1. Apple Developer → Identifiers → 选中 `merchant.com.example.CoinDecision`。
2. **Merchant Domains → Add Domain** 填 `daomessage.com`。
3. 点 **Download**，得到 `apple-developer-merchantid-domain-association` 文件。
4. 用它的内容**完整覆盖**本仓库的
   `.well-known/apple-developer-merchantid-domain-association`（文件名不变、不要加扩展名），commit + push。
5. 确认 `https://daomessage.com/.well-known/apple-developer-merchantid-domain-association` 能打开后，回 Apple 点 **Verify**。
6. （完整支付流程还需创建 Payment Processing / Merchant Identity 证书。）

完成后在页面填 `merchant.com.example.CoinDecision` 检测即可。注意：生产环境下已注册商户有时会返回 `paymentCredentialStatusUnknown`（未知），属 Apple 已知行为，并不代表没卡。

## 新用户引导 / 升级页（onboarding.html）

`onboarding.html` 是一个**独立的新产品**：用户下载并首次进入 App 后弹出的两屏引导 / 升级（付费墙）流程，
以 Apple「App Clip web view」的样式呈现，视觉风格完全参照 Apple 官方设计语言（SF Pro 字体、系统色板、
深色模式、安全区适配）。同为纯静态、**零外部依赖**的单文件，直接用浏览器打开即可预览。

- **第一屏 · Free Trial（付费墙）**：顶部「Free Trial」胶囊徽标、App 图标，标题「升级到高级版」，
  三条 iOS 设置风格的彩色图标权益（Remove Pornhub ads / 升级清晰度 / 单手控制视频），
  底部吸附的「继续 · Continue」主按钮与试用说明。
- **第二屏 · 升级成功**：🎉 + 「升级成功」，「下载高级版 / 体验完整功能」，向下箭头指向底部的
  App Store 智能横幅（含关闭按钮、评分、GET 按钮）。
- **交互与无障碍**：iOS 缓动的横向切换动画、`prefers-reduced-motion` 降级、焦点管理（切屏后聚焦标题、
  返回时聚焦按钮）、`role`/`aria-live` 播报、`inert` 隔离非活动屏、Esc 返回、GET→打开 状态切换。

在线预览（部署后）：`https://zhaoweiyang.github.io/applepay/onboarding.html`（或自定义域名下的 `/onboarding.html`）。

## 文件结构

```
.
├── index.html                                        # Apple Pay 可用卡检测页与逻辑（无外部依赖）
├── onboarding.html                                   # 新产品：两屏引导 / 升级流程（Apple 风格，无外部依赖）
├── .nojekyll                                         # 跳过 Jekyll 处理（同时让 .well-known 可被托管）
├── CNAME                                             # 自定义域名 daomessage.com
├── .well-known/apple-developer-merchantid-domain-association  # Apple 域名验证文件（占位，待替换）
└── README.md
```
