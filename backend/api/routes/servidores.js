const Route = require('@api/routes/route'),
      CSV = require('@core/csv-parser'),
      ufrn = require('@crawler/ufrn'),
      PeopleModel = require('@models/people');

class ServidoresRoute extends Route {
  constructor(expressApp) {
    super(expressApp, '/api/servidores')
  }

  async onGet(request) {
    let csv = await ufrn.acquire(ufrn.urls.people);
    let dataModel = new PeopleModel();
    let elements = CSV.getLines(csv, dataModel);
    elements.shift();

    let data = CSV.extract(elements, dataModel.getFields());

    return {
      length: data.length,
      hits: data
    };
  }
}

module.exports = ServidoresRoute;
