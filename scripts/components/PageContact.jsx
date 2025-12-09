const React = require('react');
const Layout = require('./Layout');
const { ExternalLink } = require('./ExternalLink');

const ContactPage = () => {
  return (
    <Layout isRoot>
      <div className="lead">
        <h1>Contact</h1>
        <h2>Write or follow me on</h2>
        <p>
          You can find me on:
        </p>
        <ul>
          <li>
            <ExternalLink rel="me" href="https://social.nowicki.io/@hey">
              Mastodon (hey@social.nowicki.io)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink rel="me" href="https://signal.me/#eu/CHTjnKAOdRFmJqs-dY57tqRRmFBisdE1BuiEqfiEBKmP50AFulxD5oX2KIQf4KK0">
              Signal (sznowicki.01)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink rel="me" href="https://matrix.to/#/@szymon:matrix.josko.org">
              Matrix (szymon:matrix.josko.org)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink rel="me" href="https://pixelfed.de/sznowicki">
              pixelfed.de/sznowicki
            </ExternalLink>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

module.exports = ContactPage;
