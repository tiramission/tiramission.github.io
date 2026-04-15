import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "提拉米线",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'oci-sync', link: '/oci-sync/' },
    ],

    sidebar: [
      {
        text: 'oci-sync',
        items: [
          { text: '介绍', link: '/oci-sync/' },
          { text: '使用指南', link: '/oci-sync/guide' },
          { text: '设计文档', link: '/oci-sync/design' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tiramission' }
    ]
  }
})
