const process = require('process');

console.log(JSON.stringify(process.env, null, 2));

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  FORUM_PROXY_LOCATION: forumProxy,
  LOCALE: locale,
  NODE_ENV: NODE_ENV
} = process.env;

console.log(`LOCALE: ${locale}`);

const { LOCALE: locale2 = 'english' } = process.env;

console.log(`LOCALE2: ${locale2}`);