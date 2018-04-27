'use strict';
module.exports = function(app) {
  var importFiles = require('../controllers/controller');

  // importFiles Routes
  app.route('/fileGen')
    .get(importFiles.generate_data)
};