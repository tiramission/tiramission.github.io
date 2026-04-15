# 快速开始

## 添加 Cachix 缓存

使用 Cachix CLI 添加预编译缓存，加速构建：

```bash
nix-env -iA cachix -f '<nixpkgs>'
cachix use tiramission
```

或在 NixOS 配置中添加：

```nix
{
  nix.settings.substituters = [ "https://tiramission.cachix.org" ];
  nix.settings.trusted-public-keys = [ "tiramission.cachix.org-1:MzUjC5QDhACsqCnm2OckHq2MGDAD5yBSFsi8oREYt+s=" ];
}
```

## 安装使用

### 方式一：直接运行（免克隆）

```bash
nix run github:tiramission/nixvim
```

### 方式二：安装到用户环境

```bash
nix profile add github:tiramission/nixvim
```

以后直接运行 `nvim` 即可。

### 方式三：克隆配置后运行

```bash
git clone https://github.com/tiramission/nixvim
cd nixvim
nix run .
```

### 方式四：NixOS 模块集成

将 flake 集成到你的 NixOS 配置中：

```nix
{
  inputs.nixvim.url = "github:tiramission/nixvim";

  outputs = inputs @ {
    nixpkgs,
    nixvim,
    ...
  }: {
    nixosConfigurations.your-hostname = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      modules = [
        {
          environment.systemPackages = [ nixvim.packages.x86_64-linux.default ];
        }
      ];
    };
  };
}
```

## 自定义配置

### 目录结构

```
config/
├── default.nix      # 主入口
├── keymaps.nix      # 全局快捷键
├── settings.nix     # Neovim 设置
├── lsps.nix         # LSP 配置
├── plugins.nix      # 插件列表
├── keymaps/         # 快捷键模块
│   ├── quits.nix    # 退出相关快捷键
│   └── windows.nix # 窗口操作快捷键
└── plugins/         # 插件配置模块
    ├── telescope.nix
    ├── neo-tree.nix
    ├── treesitter.nix
    └── ...
```

### 添加新配置

1. 在 `config/` 目录创建或编辑 Nix 文件
2. 在 `config/default.nix` 中导入新模块

### 构建测试

```bash
nix build
./result/bin/nvim
```
