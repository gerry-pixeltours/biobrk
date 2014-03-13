'use strict';

var _ = require('lodash'),
    moment = require('moment'),
    config = require('./config');

require('./env/grunt.js');
require('./env');

module.exports = function(grunt){

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('./config/tasks');
    grunt.initConfig(_.merge.apply({}, _.values(config)));

    alias('test', 'jshint mochaTest:functional');
    alias('dev', 'concurrent:dev');

    alias('default', 'test');
};