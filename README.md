# grunt-config-factory
Reduce the size of Gruntfile.js and easily find configuration by building a config from individual JSON configuration files.

# Install

```
npm install grunt-config-factory
```

# Getting Started

Create a directory within your project to house your individual JSON configuration files.

```
mkdir grunt_config
```

Create a JSON file which will house the plugin's configuration. _The filename must match the plugin configuration name_.

As an example, if we wanted to configure `grunt-contrib-connect`

```
touch grunt_config/connect.json
```

The guts of the file:

```json
# grunt_config/connect.json
{
  "server": {
    "options": {
      "port": 9001,
      "base": "www-root"
    }
  }
}
```

Generate the configuration within your `Gruntfile.js`

```js
# Gruntfile.js

module.exports = function(grunt) {

  var config = require('grunt-config-factory').build('./grunt_config');
  grunt.initConfig(config);

  grunt.registerTask('default', []);
  grunt.loadNpmTasks('grunt-contrib-connect');
};
```

# What the plugin does

It gets a list of JSON files from the given configuration directory and creates a configuration object much the same way you would do manually.

Given the following grunt plugins:
- `grunt-karma`
- `grunt-contrib-connect`

And using the following configuration directory:

```
grunt_config/
 - connect.json
 - karma.json
```

The following object would be returned:

```js
{
  connect: require('./grunt_config/connect.json'),
  karma: require('./grunt_config/karma.json')
}
```
