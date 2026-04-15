---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Tiramission"
  actions:
    - theme: alt
      text: Golang
      link: https://go.dev
    - theme: brand
      text: Python
      link: https://www.python.org
    - theme: alt
      text: Nix
      link: https://nixos.org

features:
  - title: Golang
    details: 由 Google 开发的开源编程语言，静态类型、编译型，内置并发支持（goroutine、channel），适合构建高性能网络服务与系统工具。
    link: https://go.dev
  - title: Python
    details: 高级动态类型语言，语法简洁可读，生态丰富，广泛用于脚本、自动化、数据科学、机器学习与 Web 开发。
    link: https://www.python.org
  - title: Nix
    details: 纯函数式包管理与配置语言，提供可重现的构建和环境管理，常用于 NixOS、可重现部署与开发环境隔离。
    link: https://nixos.org
---

## 项目

::: tip [oci-sync](/oci-sync/)
**文件同步工具**

将本地文件同步到 OCI 镜像仓库，支持 AES-256-GCM 加密，使用 Docker credential store 认证。
:::

::: tip [nixvim](/nixvim/)
**Neovim 配置管理**

使用 Nix 管理 Neovim 配置，声明式、可重现，支持多平台。
:::

## 关于此文档

本项目使用 [VitePress](https://vitepress.dev/) 构建，用于展示个人项目文档。

### 技术栈

- **VitePress** — Vue 驱动的静态网站生成器
- **Nix** — 可重现的开发环境

### 开发

```sh
# 进入开发环境
nix develop

# 构建文档
bun run docs:build

# 预览构建结果
bun run docs:preview
```