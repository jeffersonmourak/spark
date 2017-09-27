require('module-alias/register');
const dataBase = require('../core/data-base.js');

const fs = require('fs'),
      ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser'),
      BuildsModel = require('@models/builds');

// Metadata
var url_font = ufrn.urls.people;
var category = 'ufrn_people';
var type = 'people';

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

  console.log('Total inserted: '+contador);
});
