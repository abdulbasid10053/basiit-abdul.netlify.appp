const config = {
  siteTitle: 'Basiit Abdul',
  siteTitleShort: 'Basiit Abdul',
  siteTitleAlt: 'Basiit Abdul',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://basiit-abdul.netlify.app/',
  repo: 'https://github.com/abdulbasid10053/basiit-abdul.netlify.app',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
  'Basiit Abdul is a developer, designer, and writer who breaks down complex concepts for all skill levels.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-190594984-1',
  postDefaultCategoryID: 'Tech',
  userName: 'Basiit',
  userEmail: 'abdulbasid10053@gmail.com',
  userTwitter: 'basiit_abdul',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
