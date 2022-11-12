const React = require('react');

const ExternalLink = ({ href, rel, children }) => {
  return (
    <a href={href} target="_blank" rel={ rel ? rel : 'noopener noreferrer'}>
      {children}
    </a>
  );
};

module.exports = {
  ExternalLink,
}
