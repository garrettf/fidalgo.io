module.exports = {
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
        name: `garrett fidalgo`,
        short_name: `garrett fidalgo`,
        start_url: `/`,
        background_color: `#22212f`,
        theme_color: `#22212f`,
        display: `minimal-ui`,
        icon: `src/images/profile_circle.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-no-javascript`,
    `disable-preload-page-data`,
  ],
}
