---
layout: home

hero:
  name: oci-sync
  text: 将本地文件同步到 OCI 镜像仓库
  tagline: 一条命令 · AES-256-GCM 加密 · OCI Artifact 标准
  actions:
    - theme: brand
      text: 快速开始
      link: /oci-sync/guide
    - theme: alt
      text: 查看设计
      link: /oci-sync/design
    - theme: alt
      text: GitHub
      link: https://github.com/tiramission/oci-sync

features:
  - icon: 🚀
    title: 简单易用
    details: 一条命令即可将本地文件或目录推送到 OCI 兼容的镜像仓库，无需复杂配置
  - icon: 🔒
    title: 安全加密
    details: 支持 AES-256-GCM 端到端加密，密钥通过 scrypt 高强度派生，保护敏感数据安全
  - icon: 🔑
    title: 无缝认证
    details: 支持配置文件 per-registry 凭据认证，自动读取 Docker credential store
  - icon: 🌍
    title: 跨平台支持
    details: 兼容 Docker Hub、GHCR、Harbor、ACR 等任意 OCI Distribution Spec 兼容的镜像仓库
  - icon: 📦
    title: Go 语言实现
    details: 轻量高效，单二进制文件，无额外运行时依赖，支持多平台交叉编译
  - icon: 🔧
    title: 多种安装方式
    details: 支持 Go 安装、Nix Flake 一键运行、Nix Home Manager 模块化配置
  - icon: 🏷️
    title: 标签管理
    details: 支持为 OCI artifact 设置自定义标签，便于分类和筛选管理
  - icon: 📋
    title: 活动历史
    details: 自动记录 push/pull/delete 等操作历史，支持查看和清空
  - icon: 🖥️
    title: TUI 界面
    details: 全屏分栏交互式终端界面，可视化管理 shortcuts 和 artifacts
---