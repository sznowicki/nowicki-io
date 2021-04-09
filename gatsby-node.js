exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = require.resolve(`./src/templates/blog-post.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPost,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
