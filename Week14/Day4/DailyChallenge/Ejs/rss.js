const Parser = require('rss-parser');
const parser = new Parser();
const url = 'https://thefactfile.org/feed/'

async function run (){

  const feed = await parser.parseURL(url);
  console.log(feed);

  // feed.items.forEach(item => {
  //   console.log(item.title + ':' + item.link)
  // });

};

run();