const React = require('react');

const ExternalLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

module.exports = {
  ExternalLink,
}
