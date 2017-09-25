require('module-alias/register');

const fs = require('fs'),
      ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser'),
      BuildsModel = require('@models/builds');

console.log('Accessing UFRN data');

ufrn.acquire(ufrn.urls.builds).then(csv => {
  console.log('Data acquired!');
  let model = new BuildsModel();

  var elements = CSV.getLines(csv, model);
  elements.shift();

  console.log(`Parsing ${elements.length} lines`);

  data = CSV.extract(elements, model.getFields());

  fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
});
