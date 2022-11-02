const pug = require('pug');
const { resolve } = require('path');
const render = require('./reactRender.jsx');

const compiledTemplate = pug.compileFile(resolve(__dirname, './templates/layout.pug'));

const makeDocument = async (type, props, meta) => {
  const content = render(type, props);
  const output = compiledTemplate({
    meta,
    content,
  });

  return output;
};

module.exports = {
  makeDocument,
}
