module.exports = {
    siteUrl: 'https://yildizhali.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
    output: '/public/sitemap.xml',
    sitemapSize: 5000,
    generateIndexSitemap: false,
    excludedPaths: ['/api/*'],
    queryParams: {
      preview: false,
    },
  };