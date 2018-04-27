'use strict';
var createFileData = require('../logic/importFileCreation');

exports.generate_data = function(req, res) {

  var import_data = createFileData(req.query.year,
                                  req.query.month,
                                  req.query.startDay,
                                  req.query.durationInDays,
                                  req.query.howManyMeters,
                                  req.query.fileName,
                                  req.query.startingUsage,
                                  req.query.dailyUsage,
                                  req.query.readingsPerDay,
                                  req.query.parser,
                                  req.query.flowDirection,
                                  req.query.meterName,
                                  req.query.usePrefix,
                                  req.query.randomMissingReadings,
                                  req.query.randomDigitsInName,
                                  req.query.utcOffset,
                                  req.query.genRandomLifeLikeData,
                                  req.query.createAssetImportFile);
  var response = import_data;
  //res.status(200).send(new Buffer(response));
  res.status(200).send(response);
  console.log(new Date(Date.now()).toTimeString(), req.connection.remoteAddress);
};

