---
layout: home

hero:
  name: nixvim
  text: 使用 Nix 管理 Neovim 配置
  tagline: 可重现 · 无依赖 · 声明式 · 跨平台
  actions:
    - theme: brand
      text: 快速开始
      link: /nixvim/guide
    - theme: alt
      text: 快捷键
      link: /nixvim/keymaps
    - theme: alt
      text: 插件列表
      link: /nixvim/plugins

features:
  - icon: 📦
    title: 声明式配置
    details: 使用 Nix 语言声明式管理 Neovim 配置，确保在任何机器上都能获得完全相同的环境
  - icon: 🔄
    title: 可重现构建
    details: 通过 Nixpkgs 和 Nixvim 构建，确保配置版本完全可控，可随时回滚
  - icon: ☁️
    title: Cachix 缓存
    details: 提供预编译二进制缓存，大幅加速构建过程，避免重复编译
  - icon: 🛠️
    title: 开箱即用
    details: 预配置 LSP、Treesitter、Telescope 等常用插件，开箱即用
  - icon: ⌨️
    title: 快捷键优化
    details: 使用 Space 作为 Leader 键，预设常用快捷键，提升编辑效率
  - icon: 🍎
    title: 跨平台支持
    details: 支持 Linux (x86_64, aarch64) 和 macOS (aarch64)
---
