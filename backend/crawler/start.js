const ufrn = require('./ufrn');

ufrn.acquire(ufrn.urls.people).then(csv => {
  console.log(csv);
});
