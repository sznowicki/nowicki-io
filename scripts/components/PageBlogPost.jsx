const React = require('react');
const Layout = require('./Layout');

const BlogPostTemplate = ({ meta, html }) => {
  return (
    <Layout slug={meta.slug}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{meta.title}</h1>
          <p>{(new Date(meta.date)).toLocaleString('de-DE')}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  );
};

module.exports = BlogPostTemplate;
