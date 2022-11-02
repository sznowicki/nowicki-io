const React = require('react');
const Layout = require('./Layout');
const { ExternalLink } = require('./ExternalLink');

const BlogIndex = ({ pages }) => {
  const pagesSorted = pages
    .sort(([metaA], [metaB]) => {
      const dateA = new Date(metaA.date);
      const dateB = new Date(metaB.date);
      if (dateA > dateB) {
        return -1;
      }
      return 1;
    });

  return (
    <Layout isRoot>
      <div className="lead">
        <h1>
          <a href="/">Hello</a>
        </h1>
        <p>I’m Szymon, Polish living in Germany since 2015.</p>
        <p>
          My first name translates to Simon, but I prefer{' '}
          <ExternalLink href="https://pl.forvo.com/word/szymon/#pl">
            Polish pronouncing
          </ExternalLink>
          .
        </p>
        <p>
          I’m a software developer, specialized in web technologies. Big fan of
          React and CSS animations.
        </p>
        <p>
          Outside of the IT world I’m busy with some politics, but you won’t
          find any political content here on this blog. This blog content is
          purely technical.
        </p>
        <p>
          If you would like to contact me, you can
          {` `}
          <a href={`https://twitter.com/sz_nowicki`}>
            find me on Twitter!
          </a>
        </p>
      </div>
      <h2 className="header-separator">Recent blog posts</h2>
      <ol className="posts-list">
        {pagesSorted
          .map(([meta]) => (
          <li key={meta.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h3>
                  <a href={`/${meta.slug}`} itemProp="url">
                    <span itemProp="headline">{meta.title}</span>
                  </a>
                </h3>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: meta.excerpt
                  }}
                  itemProp="description"
                />
                <p>
                  <time dateTime={meta.date}>
                    {(new Date(meta.date)).toLocaleString('de-DE')}
                  </time>
                  ,{' '}
                  <a href={`/${meta.slug}`} itemProp="url">
                    read full article
                  </a>
                </p>
              </section>
            </article>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

module.exports = BlogIndex;
