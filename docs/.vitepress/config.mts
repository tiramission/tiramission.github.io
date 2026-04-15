import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "提拉米线",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'oci-sync', link: '/oci-sync/' },
      { text: 'nixvim', link: '/nixvim/' },
    ],

    sidebar: [
      {
        text: 'oci-sync',
        items: [
          { text: '介绍', link: '/oci-sync/' },
          { text: '使用指南', link: '/oci-sync/guide' },
          { text: '设计文档', link: '/oci-sync/design' },
        ]
      },
      {
        text: 'nixvim',
        items: [
          { text: '介绍', link: '/nixvim/' },
          { text: '快速开始', link: '/nixvim/guide' },
          { text: '快捷键', link: '/nixvim/keymaps' },
          { text: '插件列表', link: '/nixvim/plugins' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tiramission' }
    ]
  }
})
