exports.build = function(dir, context) {
  var
    fs = require('fs'),
    path = require('path'),
    FileHandler = require('./lib/file-handler'),
    config = {},
    files = fs.readdirSync(dir);

  files.forEach(function(file) {
    var filePath = path.join(process.cwd(), dir, file),
        file = FileHandler.new(filePath, context);

    if(file.isValid())
      config[file.getKey()] = file.load();
  });
  return config;
};
