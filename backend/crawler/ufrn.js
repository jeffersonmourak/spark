const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const HTTP = require('@core/http');
const CSV = require('@core/csv-parser');
const URLS = require('@crawler/urls.json');

class UFRN {
  static get urls() {
    return URLS;
  }

  /**
    Get Page
    @private
    @description
    Returns a JSDOM object with functions to find elements.

    @param {String} htmlCode HTML content of target page.
    @returns {JSDOM}
  */
  static _getPage(htmlCode) {
    return new JSDOM(htmlCode);
  }

  /**
    Download File content
    @private
    @description
    this function returns the URL for a dynamic csv file inside the page.

    @param {JSDOM} page JSDOM object of page.
    @returns {String}
  */
  static _downloadFile(page) {
    return page.window.document.querySelectorAll('.resource-url-analytics')[0].href
  }

  /**
    Acquire function

    @description
    Funcion to access and find the dynamic URL for CSV file inside open data
    platform of UFRN

    @param {String} url Url of page.
  */
  static async acquire(url) {
    let page = UFRN._getPage(await HTTP.get(url)),
        fileDownload = UFRN._downloadFile(page);
    return await HTTP.get(fileDownload);
  }

  /**
    getAndProcess

    @description
    Function to process data from CSV after get them in UFRN open data website

    @param {String} url Url of page.
    @param {BaseModel} model Model of data.
    @returns {Array}
  */
  static async getAndProcess(url, model) {
    let csv = await UFRN.acquire(url);
    let elements = CSV.getLines(csv, model);
    
    elements.shift();

    return CSV.extract(elements, model);
  }
}

module.exports = UFRN;
