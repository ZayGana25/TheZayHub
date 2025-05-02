/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://thezayhub.com', // Replace with your custom domain
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/secret', '/api/*'],
    outDir: './public/SEO',
  };