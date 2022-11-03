const pug = require('pug');
const { resolve } = require('path');
const crypto = require('crypto');
const render = require('./reactRender.jsx');

const compiledTemplate = pug.compileFile(resolve(__dirname, './templates/layout.pug'));

const hashLong = crypto.createHmac("md5", `unique - ${Date.now()}`).digest('hex');
const hash = hashLong.slice(0, 5);

const makeDocument = async (type, props, meta) => {
  const content = render(type, props);
  const output = compiledTemplate({
    meta: {
      ...meta,
      unique: hash,
    },
    content,
  });

  return output;
};

module.exports = {
  makeDocument,
}
