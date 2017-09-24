require('module-alias/register');

const fs = require('fs'),
      ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser');

console.log('Accessing UFRN data');

ufrn.acquire(ufrn.urls.people).then(csv => {
  console.log('Data acquired!')
  var elements = CSV.getLines(csv);

  console.log(`Parsing ${elements.length} lines`);
  var head = CSV.getHeads(csv);
  data = CSV.extract(elements, head);

  fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
});
