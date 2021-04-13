import * as React from 'react';
import { Link } from 'gatsby';
import { ExternalLink } from './externalLink';
import { Helmet } from 'react-helmet';

const Layout = ({ location, siteUrl, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = null;
  } else {
    header = (
      <nav>
        <Link className="header-link-home" to="/">
          go back to home page
        </Link>
      </nav>
    );
  }

  const commentIntent = encodeURIComponent(
    `@sz_nowicki: \n ${siteUrl}${location.pathname ?? ''}`
  );

  return (
    <>
      <Helmet>
        <script async defer data-domain="nowicki.io" src="https://plausible.io/js/plausible.js"></script>
      </Helmet>

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
                .
              </p>
              <p>
                If you wish to{' '}
                <ExternalLink href="https://twitter.com/sz_nowicki">
                  contact me
                </ExternalLink>
                , or{' '}
                <ExternalLink
                  href={`https://twitter.com/intent/tweet?text=${commentIntent}`}
                >
                  comment my blog post
                </ExternalLink>
                , feel free to reach me on{' '}
                <ExternalLink href="https://twitter.com/sz_nowicki">
                  Twitter
                </ExternalLink>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
