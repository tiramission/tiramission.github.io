---
layout: doc

title: NixVim学习1
next:
  text: 'NixVim学习2'
  link: './post2'
---

# 自定义 Nixvim

### 1. 克隆代码仓库：
```bash
git clone https://github.com/tiramission/nixvim
```

### 2. 编辑

> 自定义`config` 目录下的相关配置

### 3. 构建

```bash
nix build -L
```

### 4. 使用
```bash
./result/bin/nvim
```

### 5. 安装
```bash
# 本地仓库
nix profile add .
# 远程仓库
nix profile add github:tiramission/nixvim
```
> 更新
```bash
nix profile upgrade nixvim --refresh
```
