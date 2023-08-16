import sidebar from './sidebar'

export default {
  title: "I Don't Know IMU",
  description: 'Just playing around.',
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
	outlineTitle: '目录',
    logo: 'favicon.ico',
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright &copy; GeorgeQH 2023'
    },
    nav: [
      { text: '介绍', link: '/IMU/book-introduction.md' },
      { text: '关于我', link: '/IMU/about-me' }
    ],
    sidebar,
	
	editLink: {
      pattern: 'https://github.com/xinlei3166/vitepress-demo/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xinlei3166/vitepress-demo' }
    ],
  }
}
