const { readFileSync } = require('fs');
const showdown = require('showdown');
showdownHighlight = require('showdown-highlight');
showdown.setFlavor('github');

const convertPage = async (filename) => {
  const fileBuff = readFileSync(filename);
  const content = fileBuff.toString('utf8');
  const converter = new showdown.Converter({
    metadata: true,
    // That's it
    extensions: [showdownHighlight({
      // Whether to add the classes to the <pre> tag, default is false
      pre: true,
      // Whether to use hljs' auto language detection, default is true
      auto_detection: true
    })]
  });
  const rendered = converter.makeHtml(content);
  const head = converter.getMetadata();

  return [head, rendered];
}

module.exports = {
  convertPage,
}
