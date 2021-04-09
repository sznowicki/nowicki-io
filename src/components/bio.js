/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `);

  const social = data.site.siteMetadata?.social;

  return (
    <div className="lead">
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
  );
};

export default Bio;
