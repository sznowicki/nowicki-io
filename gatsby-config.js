module.exports = {
  siteMetadata: {
    title: `Szymon Nowicki personal website`,
    description: `Public side notes and hacking journeys (and some rants) by Szymon Nowicki.`,
    siteUrl: `https://nowicki.io`,
    social: {
      twitter: `sz_nowicki`,
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Szymon Nowicki personal website`,
        short_name: `SN`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#090909`,
        display: `minimal-ui`,
        icon: `design/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sitemap',
  ],
};
