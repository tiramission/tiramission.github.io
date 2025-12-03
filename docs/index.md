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

## 快速开始

你可是使用Nix对此项目进行开发

```sh
nix develop
```

### 构建
```sh
bun run docs:build
```