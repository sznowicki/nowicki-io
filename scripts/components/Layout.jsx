const React = require('react');
const { ExternalLink } = require('./ExternalLink');

const Layout = ({ isRoot, children }) => {
  const isRootPath = isRoot
  let header;

  if (isRootPath) {
    header = null;
  } else {
    header = (
      <nav>
        <a className="header-link-home" href="/">
          go back to home page
        </a>
      </nav>
    );
  }

  return (
    <>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            <h2>Footnotes</h2>
            <div className="footer-content__text">
              <p>
                This website source code is open source. You can check it on{' '}
                <ExternalLink href="https://github.com/sznowicki/nowicki-io">
                  GitHub
                </ExternalLink>
                 {' '}and subscribe with your RSS reader.
              </p>
              <p>
                If you wish to{' '}
                <ExternalLink href="https://social.nowicki.io/@hey" rel="me">
                  contact me
                </ExternalLink>
                , or comment my blog post
                , feel free to reach me on{' '}
                <ExternalLink href="https://social.nowicki.io/@hey" rel="me">
                  Mastodon
                </ExternalLink>
                .
              </p>
            </div>
            <h2>One more thing</h2>
            <div className="footer-content__text">
              <p>
                I do some small web apps that you may like:
                {' '}
                <a href="https://kukei.eu">kukei.eu - search engine for web devs</a>
                {' '}
                ,
                {' '}
                <a href="https://masto.kukei.eu">masto.kukei.eu - real-time mastodon search</a>
                {' '}
                and
                {' '}
                <a href="https://kapus.app">kapus.app - universal, encrypted clipboard</a>.
              </p>
              <p>
                If you like my work and you enjoyed my posts, you can <a href={"https://buymeacoffee.com/nowicki"}>buy me a coffee</a>
                {' '}
                or <a href="https://coindrop.to/sznowicki" target="_blank">drop me a coin</a>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

module.exports = Layout;
