module.exports = {
  siteMetadata: {
    title: `Nasirpur Farms Website`,
    description: `Website for Nasirpur Farms which offers custom Drip Irrigation solutions and Plant Tissue Culture solutions`,
    author: `Paramjit Bal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nasirpur Farms`,
        short_name: `Nasirpur`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        useMozJpeg: true, // Build time increase!
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-antd`,
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
  ],
}
