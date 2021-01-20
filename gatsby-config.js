module.exports = {
  siteMetadata: {
    title: `Nasirpur Farms`,
    description: `
      We offer the best quality and lowest priced tissue culture plants and seeds for Banana, Potato, Strawberry, Sugarcane, Kiwi, Gerbera, Pipal, Kalanchoe, Succulents and Plowinia in Punjab, Haryana and Himachal Pradesh.
      Our budget-friendly Drip Irrigation lines and tape solutions maximise agricultural produce and minimise impact on environment.
    `,
    keywords: ['tissue culture', 'seeds', 'plants', 'best', 'quality', 'lowest price', 'fertigation', 'drip', 'irrigation', 'drip-lines', 'drip-tape',
      'service', 'farming', 'punjab', 'haryana', 'himachal'],
    author: `Paramjit Bal`,
    siteUrl: `https://nasirpur.farm`
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
        useMozJpeg: true, // Build time increase at the expense of quality
        display: `minimal-ui`,
        icon: `src/images/nasirpur_farms_logo.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-advanced-sitemap`
  ],
}
