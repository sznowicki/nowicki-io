const { readdirSync, readFileSync } = require('fs');
const {
  pathExistsSync,
} = require('fs-extra');
const {
  resolve
} = require('path');
const md = require('markdown-it');
const hljs = require('highlight.js');

const makePage = async (filename) => {
  const fileBuff = readFileSync(filename);
  const content = fileBuff.toString('utf8');
  console.log(content);
}
const main = async () => {
  const blogPathname = resolve(__dirname, '../', 'content/blog');
  const dir = readdirSync(blogPathname);
  const files = dir
    .map((el) => resolve(blogPathname, el, './index.md'))
    .filter((el) => (
      pathExistsSync(el))
    );

  for (const f of files) {
    await makePage(f);
  }
}

main();
