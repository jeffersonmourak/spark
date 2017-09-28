const Route = require('@api/routes/route'),
      CSV = require('@core/csv-parser'),
      ufrn = require('@crawler/ufrn'),
      BuildsModel = require('@models/builds');

class ObrasRoute extends Route {
  constructor(expressApp) {
    super(expressApp, '/api/obras')
  }

  async onGet(request) {
    let csv = await ufrn.acquire(ufrn.urls.builds);
    let dataModel = new BuildsModel();
    let elements = CSV.getLines(csv, dataModel);
    elements.shift();

    let data = CSV.extract(elements, dataModel.getFields());

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ObrasRoute;
