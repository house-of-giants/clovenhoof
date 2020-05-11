/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Clovenhoof Tattoo",
    titleTemplate: "%s | Clovenhoof Tattoo",
    description: "Kevin Seawell is a tattoo artist based out of Denver Colorado.",
    image: "/ct-social.jpg",
    siteUrl: 'https://clovenhoof.tattoo',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `clovenhoof_tattoo`,
      },
    },
  ],
}
