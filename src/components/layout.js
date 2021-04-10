import * as React from 'react';
import { Link } from 'gatsby';

const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener, noreferrer"
      >
      {children}
    </a>
  )
}

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

  const commentIntent = encodeURIComponent(`@sz_nowicki: \n ${siteUrl}${location.pathname ?? ''}`);


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div className="footer-content">
          <h2>Footnotes</h2>
          <div className="footer-content__text">
            <p>
              This website source code is open source. You can check it on <a href="https://github.com/sznowicki/nowicki-io" target="_blank" rel="noreferrer, noopener">GitHub</a>.
            </p>
            <p>
              If you wish to
              {' '}
              <ExternalLink href="https://twitter.com/sz_nowicki">
                contact me
              </ExternalLink>
              , or
              {' '}
              <ExternalLink href={`https://twitter.com/intent/tweet?text=${commentIntent}`}>
                comment my blog post
              </ExternalLink>,
              {' '}
              feel free to reach me on
              {' '}
              <ExternalLink href="https://twitter.com/sz_nowicki">Twitter</ExternalLink>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
