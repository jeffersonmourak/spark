require('module-alias/register');

const ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser');

ufrn.acquire(ufrn.urls.people).then(csv => {
  var elements = CSV.getLines(csv);
  var head = CSV.getHeads(csv);

  data = CSV.extract(elements, head);

  console.log(data);
});
