require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'Y2I2MWJmMDItYTcwZC00MDM5LWIzYmYtODEwNThjY2NhOTViNjM3OTAxMjU5NTI5MTgxOTM0',
        autopop: true
      }
    },
  ],
}
