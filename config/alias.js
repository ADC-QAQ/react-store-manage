const path = require('path');
const paths = require('./paths');

const $ = relativePath => path.resolve(paths.appSrc, relativePath);

module.exports = {
  '@/': paths.appSrc,
  '@components': $('components'),
  '@views': $('views'),
  '@routes': $('routes')
}
