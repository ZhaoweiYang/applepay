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

本仓库已包含 GitHub Actions 工作流 `.github/workflows/deploy.yml`，推送到 `claude/zen-mendel-wquruq` 分支后会自动构建并部署。

**首次需要手动开启 Pages：**

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 回到 **Actions** 标签页，确认 “Deploy to GitHub Pages” 工作流运行成功。
4. 几分钟后即可通过 `https://zhaoweiyang.github.io/applepay/` 访问。

> 如果希望从 `main` 分支部署，把工作流 `on.push.branches` 改成 `main` 并将代码合并过去即可。

## 文件结构

```
.
├── index.html                  # 全部页面与检测逻辑（无外部依赖）
├── .nojekyll                   # 跳过 Jekyll 处理
├── .github/workflows/deploy.yml# GitHub Pages 部署工作流
└── README.md
```
