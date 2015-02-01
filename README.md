# Grunt Configuration Factory
Reduce the size of Gruntfile.js and easily find configuration by building a config from individual __JSON__ or __Javascript__ configuration files.

# Install

```
npm install grunt-config-factory
```

# When to choose JSON or Javascript

Choose JSON configuration when your plugin configuration is static.

Choose Javascript configuration when your plugin requires injecting an object such as global settings (e.g. project name to be used by multiple plugins).

# Getting Started

Create a directory within your project to house your individual JSON or Javascript configuration files.

```
mkdir grunt_config
```

## JSON Configuration Files

Create a JSON file which will house the plugin's configuration.

_Note: The filename must match the plugin's expected configuration property name_.

As an example, if we wanted to configure `grunt-contrib-connect` we need to call the file `connect.json` because `grunt-contrib-connect` expects the property name to be `connect`.

```
touch grunt_config/connect.json
```

The contents of the file:

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

## Javascript Configuration Files

Create a Javascript file which will house the plugin's configuration.

_Note: The filename must match the plugin's expected configuration property name_.

As an example, if we wanted to configure `grunt-contrib-connect` we need to call the file `connect.js` because `grunt-contrib-connect` expects the property name to be `connect`.

```
touch grunt_config/connect.js
```

The contents of the file:

```js
# grunt_config/connect.js
module.exports = function(context) {
  return {
    server: {
      options: {
        port: context.connect.port,
        base: "www-root"
      }
    }
  };
};
```

# Configuring Gruntfile.js

Generate the configuration within your `Gruntfile.js`

```js
# Gruntfile.js

module.exports = function(grunt) {
  var context = { connect: { port: 8000 } }; // Optional. You could pass grunt around.
  var config = require('grunt-config-factory').build('./grunt_config', context); // Second parameter is optional. Will only be passed to Javascript files.
  grunt.initConfig(config);

  grunt.registerTask('default', []);
  grunt.loadNpmTasks('grunt-contrib-connect');
};
```

## What the plugin does

It gets a list of JSON and/or Javascript files from the given configuration directory and creates a configuration object much the same way you would do manually.

Given the following grunt plugins:
- `grunt-contrib-connect`
- `grunt-karma`

And using the following configuration directory:

```
grunt_config/
 - connect.json
 - karma.js
```

The returned object would be the same as if we had returned:

```js
{
  connect: require('./grunt_config/connect.json'),
  karma: require('./grunt_config/karma.json')(context)
}
```
