const Route = require('@api/routes/route'),
      CSV = require('@core/csv-parser'),
      ufrn = require('@crawler/ufrn'),
      ExtenstionsModel = require('@models/extensions');

class ExtensaoRoute extends Route {
  constructor(expressApp) {
    super(expressApp, '/api/atividades-de-extensao')
  }

  async onGet(request) {
    let csv = await ufrn.acquire(ufrn.urls.extension);
    let dataModel = new ExtenstionsModel();
    let elements = CSV.getLines(csv, dataModel);
    elements.shift();

    let data = CSV.extract(elements, dataModel.getFields());

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ExtensaoRoute;
