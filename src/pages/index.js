import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const social = data.site.siteMetadata?.social;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="lead">
        <h1>
          <Link to="/">Hello</Link>
        </h1>
        <p>
          I’m Szymon, Polish living in Germany since 2015.
        </p>
        <p>
          My first name translates to Simon, but I prefer <a href="https://pl.forvo.com/word/szymon/#pl" rel="noreferrer, noopener" target="_blank">Polish pronouncing</a>.
        </p>
        <p>
          I’m a software developer, specialized in web technologies. Big fan of React and CSS animations.
        </p>
        <p>
          Outside of the IT world I’m busy with some politics, but you won’t find any political content here on this blog. This blog content is purely technical.
        </p>
        <p>
          If you would like to contact me, you can
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            find me on Twitter!
          </a>
        </p>
      </div>
      <h2>Recent blog posts</h2>
      <ol className="posts-list">
        {posts.map(post =>  (
          <li key={post.frontmatter.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h3>
                  <Link to={post.frontmatter.slug} itemProp="url">
                    <span itemProp="headline">{post.frontmatter.title}</span>
                  </Link>
                </h3>
                <time dateTime={post.frontmatter.date}>{post.frontmatter.dateFormatted}</time>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.excerpt || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          date,
          dateFormatted: date(formatString: "DD.MM.YYYY")
          excerpt
          title
          slug,
        }
      }
    }
  }
`;
