const { readFileSync } = require('fs');
const showdown = require('showdown');
showdownHighlight = require('showdown-highlight');
showdown.setFlavor('github');

showdown.extension('header-anchors',
  () =>{
  const ancTpl = '$1 id="$3"><a id="link-to-$3" class="anchor" href="#$3">$4</a></h$5>';
  return [{
    type: 'html',
    regex: /(<h[1-3])( id="([^"]+)")?>(.*?)<\/h([1-3])>/g,
    replace: ancTpl
  }];
});

const convertPage = async (filename) => {
  const fileBuff = readFileSync(filename);
  const content = fileBuff.toString('utf8');

  const converter = new showdown.Converter({
    metadata: true,
    simpleLineBreaks: false,
    // That's it
    extensions: [
      'header-anchors',
      showdownHighlight({
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
