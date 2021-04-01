module.exports = {
  siteMetadata: {
    title: 'rebel-love',
  },
  plugins: [
    'gatsby-theme-gallery',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
