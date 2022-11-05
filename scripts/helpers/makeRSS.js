const { writeFileSync } = require('fs');
const { resolve } = require('path');

const Feed = require('feed').Feed;
const { webConfig } = require('./common');
 
const makeRSS = async (pages, distFolder) => {
  const feed = new Feed({
    title: webConfig.title,
    description: webConfig.description,
    id: 'https://nowicki.io',
    url: 'https://nowicki.io',
    language: 'en',   
    updated: new Date(),
    feedLinks: {
      atom: 'https://nowicki.io/rss.atom',
      json: 'https://nowicki.io/rss.json',
      rss: 'https://nowicki.io/rss.xml',
    },
    author: {
      name: 'Szymon Nowicki',
      link: 'https://nowicki.io'
    }
  });
  

  pages.forEach(([meta, html]) => {
    feed.addItem({
      title: meta.title,
      description: meta.excerpt,
      date: new Date(meta.date),
      link: `https://nowicki.io/${meta.slug}`,
      content: html,
    });
  });
  
  writeFileSync(
    resolve(distFolder, './rss.atom'),
    feed.atom1(),
  );
  
  writeFileSync(
    resolve(distFolder, './rss.json'),
    feed.json1(),
  );
  
  writeFileSync(
    resolve(distFolder, './rss.xml'),
    feed.rss2(),
  );
}

module.exports = makeRSS;