/* Build entry: generate all static pages */
const g = require('./generator');

require('./pages-jobseeker')(g);
require('./pages-employer')(g);
require('./pages-company')(g);
require('./pages-legal')(g);

console.log('\nAll pages generated.');