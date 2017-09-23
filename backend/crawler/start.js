require('module-alias/register');
const dataBase = require('../core/data-base.js');

const fs = require('fs'),
      ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser');

// Metadata
var url_font = ufrn.urls.people;
var category = 'ufrn_people';
var type = 'people';

console.log('Accessing UFRN data');

ufrn.acquire(url_font).then(csv => {
  console.log('Data acquired!')
  var elements = CSV.getLines(csv);
  console.log(`Parsing ${elements.length} lines`);
  var head = CSV.getHeads(csv);
  data = CSV.extract(elements, head);
  var contador = 0;
  data.forEach(function(item, index){
  		dataBase.insert(category, type, item).catch(function (msg) {
     		// do nothing
		});
  	contador++;
  });

  console.log('Total inserted: '+contador);
});
