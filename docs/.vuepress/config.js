module.exports = {
  theme: 'reco',
  title: 'moon',
  description: '「离开世界之前 一切都是过程」',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/moon/',
  themeConfig: {
    type: 'blog',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'About', link: '/about/', icon: 'reco-account' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    ],
    blogConfig: {
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/qwnwzzo' },
      ]
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: 'https://photo.smallsunnyfox.com/images/blog/logo.png',
    authorAvatar: 'https://photo.smallsunnyfox.com/images/blog/logo.png',
    noFoundPageByTencent: false,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'moon',
    // 项目开始时间
    startYear: '2022',
    markdown: {
      lineNumbers: true
    },
    plugins: [
      // [
      //   '@vuepress/pwa',
      //   {
      //     serviceWorker: true,
      //     updatePopup: {
      //       message: '发现新内容可用',
      //       buttonText: '刷新'
      //     }
      //   }
      // ]
    ],
  }
}