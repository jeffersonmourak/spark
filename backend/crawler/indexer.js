require('module-alias/register');

const ufrn = require('@crawler/ufrn'),
      servidoresModel = require('@models/servidores-model'),
      obrasModel = require('@models/obra-model'),
      extensaoModel = require('@models/extensao-model'),
      Screen = require('@core/screen'),
      Elastic = require('@core/elastic');

let sections = [
  {
    category: 'servidores',
    url: ufrn.urls.people,
    model: servidoresModel
  },
  {
    category: 'obras',
    url: ufrn.urls.builds,
    model: obrasModel
  },
  {
    category: 'extensao',
    url: ufrn.urls.extension,
    model: extensaoModel
  }
];

async function clearCategory(category) {
  try {
    await Elastic.clearCategory(category);
  } catch(e) {}

  return true;
}

async function index() {
  for (let section of sections) {
    Screen.printLine(`Indexing: ${section.category}`, Screen.colors.green);
    try {
      await clearCategory(section.category);

      let data = await ufrn.getAndProcess(section.url, section.model);
      Screen.printLine(`Lines Parsed: ${data.length}`);

      await Elastic.insertAll(section.category ,data);
    } catch(e) {
      Screen.error(e);
      exit(1);
    }
  }
}

index();
