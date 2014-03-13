'use strict';

var grunt = require('grunt');

grunt.log.write('Loading config files ...');

module.exports = {
    package: {
        pkg: grunt.file.readJSON('package.json')
    },
    dev: require('./tasks/development.js'),
    env: require('./tasks/environment.js'),
    build: require('./tasks/build.js'),
    release: require('./tasks/release.js'),
    deploy: require('./tasks/deploy.js')
};
