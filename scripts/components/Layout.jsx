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
                If you're interested in
                {' '}
                <a href="https://agentslug.com">monitoring your website uptime</a>
                {' '}
                or
                {' '}
                <a href="https://agentslug.com">monitoring your application/server</a>
                {' '}
                then I recommend a great service, which I run as an indie dev for many years:
                {' '}
                <a href="https://agentslug.com">AgentSlug.com</a>.
              </p>
              <p>
                It has no free tier but is cheap and has a trial with no credit card. Check this out!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

module.exports = Layout;
