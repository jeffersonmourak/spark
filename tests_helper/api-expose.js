const _ = require('lodash');

function exposed(expose, assert) {
  let error = false;

  _.each(expose, (item, key) => {
    let type = typeof item;

    if (type === 'object' && Object.keys(item).length > 0) {
      exposed(item, assert[key])
    } else if (type !== assert[key]) {
      error = true;
      return false;
    }
  });

  return !error;
};

module.exports = exposed;
