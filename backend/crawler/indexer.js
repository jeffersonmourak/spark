require('module-alias/register');
const DataBase = require('@core/data-base.js');
const Screen = require('@core/screen');

const fs = require('fs'),
      ufrn = require('@crawler/ufrn'),
      CSV = require('@core/csv-parser'),
      BuildsModel = require('@models/builds'),
      PeopleModel = require('@models/people'),
      ExtentionsModel = require('@models/extensions');

class Indexer {
  static getData(csv, model) {
    let dataModel = new model();
    let elements = CSV.getLines(csv, dataModel);
    elements.shift();

    Screen.printLine(`Parsing ${elements.length} lines`, Screen.colors.foreground.yellow);

    return CSV.extract(elements, dataModel.getFields());
  }

  static async index(route, type, model) {
    Screen.printLine(`Indexing ${type}`, Screen.colors.background.green);

    Screen.printLine('Accessing UFRN open data', Screen.colors.bright);

    try {
      let csv = await ufrn.acquire(route);
      Screen.printLine('Data acquired!', Screen.colors.foreground.green);
      let data = Indexer.getData(csv, model);

      await DataBase.insertAll(type, data);

      Screen.printLine('Done!', Screen.colors.foreground.green);

    } catch (e) {
      console.log(e);
      Screen.printError('Error at UFRN server');
      exit(1);
    }
  }
}


async function start() {
  await Indexer.index(ufrn.urls.builds, 'builds', BuildsModel);

  await Indexer.index(ufrn.urls.people, 'people', PeopleModel);

  await Indexer.index(ufrn.urls.extension, 'extension', ExtentionsModel);
}

start().catch(Screen.printError);
