exports.build = function(dir, context) {
  var
    fs = require('fs'),
    path = require('path'),
    FileHandler = require('./lib/file-handler'),
    config = {},
    files = fs.readdirSync(dir);

  files.forEach(function(fileName) {
    var filePath = path.join(process.cwd(), dir, fileName),
        file = FileHandler.new(filePath, context);

    if(file.isValid()) {
      config[file.getKey()] = file.load();
    }
  });
  return config;
};
