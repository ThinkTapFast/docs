// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  site: 'https://thinktapfast-docs.vercel.app',
  integrations: [
    starlight({
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },

      plugins: [
        starlightThemeNova({
          nav: [
            {
              label: {
                root: 'Docs',
                'zh-cn': '文档',
              },
              href: {
                root: '/guide/getting-started/',
                'zh-cn': '/zh-cn/guide/getting-started/',
              },
            },
            {
              label: {
                root: 'Changelog',
                'zh-cn': '更新日志',
              },
              href: 'https://github.com/ocavue/starlight-theme-nova/blob/master/packages/starlight-theme-nova/CHANGELOG.md',
            },
          ],
        }),
      ],

      title: 'ThinkTapFast | Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ThinkTapFast/docs',
        },
      ],

      sidebar: [
        {
          label: 'Guide',
          translations: {
            'zh-CN': '向导',
          },
          autogenerate: { directory: 'guide' },
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api-reference' },
        },
        {
          label: 'Components',
          translations: {
            'zh-CN': '组件',
          },
          autogenerate: { directory: 'components' },
        },
      ],
    }),
  ],

  devToolbar: { enabled: false },
})
