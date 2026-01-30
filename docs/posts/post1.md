---
layout: doc

title: 自定义Nixvim
next:
  text: "MacOS初始化"
  link: "./post2"
---

# 自定义 Nixvim

### 1. 克隆代码仓库：

```bash
git clone https://github.com/tiramission/nixvim
```

### 2. 编辑

> 自定义`config` 目录下的相关配置

#### 快捷键

| 快捷键                          | 模式 | 动作                      | 描述               |
| ------------------------------- | ---- | ------------------------- | ------------------ |
| `<leader>u`                     | `n`  |                           | 打开UI相关快捷键   |
| `<leader>ue`                    | `n`  | `<cmd>Neotree toggle<cr>` | 切换NeoTree        |
| `<leader>q`                     | `n`  |                           | 打开退出相关快捷键 |
| `<leader>s`                     | `n`  |                           | Telescope相关      |
| `<leader>qq`                    | `n`  | `<cmd>qa<cr>`             | 直接退出           |
| `<leader>q1` <br/> `<leader>q!` | `n`  | `<cmd>qa!<cr>`            | 强制退出           |
| `<leader>qx`                    | `n`  | `<cmd>qx<cr>`             | 保存退出           |

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
