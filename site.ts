// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Yapurr',
  description: '用商业保护动物',
  logo: '',
  author: 'Yapurr',
  url: 'https://www.yapurr.com',
  github: 'https://github.com/yapurr',
  defaultLocale: 'zh-cn', // default
  identity: {
    type: 'Organization',
  } as any,
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    // { text: 'Adopt Now', link: '/adopt', type: 'primary', icon: 'i-mdi-home' },
    {
      text: '近期文章',
      link: '/articles',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: '官方博客', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: '成为志愿者',
      link: '/volunteer',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
