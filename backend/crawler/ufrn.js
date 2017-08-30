const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const HTTP = require('../http');
const URLS = require('./urls.json');

/**
  Acquire function

  @description
  Funcion to access and find the dynamic URL for CSV file inside open data
  platform of UFRN
  
  @param {String} url Url of pafge.
*/
async function acquire(url) {
  let page = new JSDOM(await HTTP.get(url)),
      fileDownload = page.window.document.querySelectorAll('.resource-url-analytics')[0].href;
  return await HTTP.get(fileDownload);
}

module.exports = {
  acquire: acquire,
  urls: URLS
};
