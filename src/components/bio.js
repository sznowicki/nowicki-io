/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const title = data.site.siteMetadata?.title;
  const description = data.site.siteMetadata?.description;
  const social = data.site.siteMetadata?.social;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['AUTO', 'WEBP', 'AVIF']}
        src="../images/szymon_nowicki_800.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />

      <p>
        {description}
        {` `}
        <a href={`https://twitter.com/${social?.twitter || ``}`}>
          Follow me on Twitter!
        </a>
      </p>
    </div>
  );
};

export default Bio;
