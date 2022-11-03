const React = require('react');
const { renderToString } = require('react-dom/server');
const Page404 = require('../components/Page404.jsx');
const PageIndex = require('../components/PageIndex.jsx');
const PageBlogPost = require('../components/PageBlogPost');

const pickApp = (type) => {
  switch (type) {
    case 'home':
      return PageIndex;
    case '404':
      return Page404;
    default:
      return PageBlogPost;
  }
}

const reactRender = (type, props) => {
  const App = pickApp(type);

  const output = renderToString(<App {...props} />);

  return output;
}


module.exports = reactRender;
