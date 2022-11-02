const { readdirSync, readFileSync, writeFileSync, lstatSync } = require('fs');
const {
  pathExistsSync,
  ensureDirSync,
  removeSync,
  copySync,
} = require('fs-extra');
const {
  resolve
} = require('path');
const { convertPage } = require('./markdown/convertPage');
const { makeDocument } = require('./templater/index');
const blogPathname = resolve(__dirname, '../', 'content/blog');
const blogDirFiles = readdirSync(blogPathname);
const distFolder = resolve(__dirname, '../public/');

const copyStaticFiles = async (dir, meta) => {
  const files = readdirSync(dir);
  const staticFiles = files.filter(el => el.endsWith('.md') === false);
  for (const staticFile of staticFiles) {
    const from = `${dir}/${staticFile}`;
    const to = resolve(distFolder, meta.slug, staticFile);
    copySync(from, to);
  }
};

const makePage = async (filename, [meta, html]) => {
  const originalDir = resolve(filename, '../');
  const document = await makeDocument('post', { meta, html}, meta);
  const dir = resolve(distFolder, `./${meta.slug}`);
  ensureDirSync(dir);
  const target = resolve(dir, './index.html');
  writeFileSync(target, document);
  await copyStaticFiles(originalDir, meta)
}

const makeStaticPages = async (pages) => {
  const index = await makeDocument('home', { pages }, {
    title: 'Szymon Nowicki personal website',
    excerpt: 'Public side notes and hacking journeys (and some rants) by Szymon Nowicki.',
  });
  writeFileSync(resolve(distFolder, './index.html'), index);
  const page404 = await makeDocument('404', {}, {
    title: 'Not found!',
    excerpt: 'Page not found',
  });
  writeFileSync(resolve(distFolder, './404.html'), page404);
}

const main = async () => {
  removeSync(distFolder);
  ensureDirSync(distFolder);
  const files = blogDirFiles
    .map((el) => resolve(blogPathname, el, './index.md'))
    .filter((el) => (
      pathExistsSync(el))
    );

  const pages = [];
  for (const f of files) {
    const page = await convertPage(f);
    await makePage(f, page);
    pages.push(page)
  }
  await makeStaticPages(pages);
}

main();
