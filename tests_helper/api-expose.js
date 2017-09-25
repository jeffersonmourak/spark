const _ = require('lodash');

function getType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function exposed(expose, assert, parent = '') {
  let keys = expose;

  if (typeof expose === 'function') {
    keys = _.reduce(Object.getOwnPropertyNames(expose), (ac, key) => {
      if (_.indexOf(['prototype', 'name', 'length'], key) === -1) {
        ac[key] = null;
      }

      return ac;
    }, {});
  }

  for(let key in keys) {
    let item = expose[key],
        type = getType(item);

    if (type === 'object' && Object.keys(item).length > 0) {
      if (!exposed(item, assert[key], `${key}.`)) {
        return false;
      }
    } else if (!_.get(assert, key)) {
      throw new Error(`Missing description for '${parent}${key}'`);
    } else if  (type !== assert[key]) {
      throw new Error(`Incorrect type for '${parent}${key}' expected '${assert[key]}' but got '${type}' `);
      return false;
    }
  }
  return true;
};

module.exports = exposed;
