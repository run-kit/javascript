import { defineConfig } from 'dumi';

export default defineConfig({
  // description: '',
  logo: '/javascript/images/logo.png',
  title: 'JavaScript',
  base: '/javascript/',
  publicPath: '/javascript/',
  mode: 'site',
  locales: [
    ['zh-CN', '中文']
  ],
  themeConfig: {},
  favicon: '/javascript/images/favicon.ico',
  navs: [
    {
      title: '手写',
      path: '/self-code',
    },
    {
      title: '工具',
      path: '/tool',
    },
  ],
  metas: [
    {
      name: 'keywords',
      content: 'javascript',
    },
    {
      name: 'description',
      content: '让开发变的简单',
    },
  ],
  theme: {
    '@c-primary': '#C641EB',
  },
  styles: [
    `.markdown h3 a { color: #454d64; }
     .markdown blockquote p { margin: 5px  0; }`,
  ],
  404: true,
  // more config: https://d.umijs.org/config
});
