require('module-alias/register');

const ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser');

ufrn.acquire(ufrn.urls.people).then(csv => {
  let lines = CSV.getLines(csv),
      headers = lines.shift();
      head = CSV.getHeads(headers),
      data = CSV.extract(lines, head);
});
