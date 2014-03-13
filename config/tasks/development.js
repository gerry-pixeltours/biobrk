'use strict';

var assets = require('../assets'),
    grunt = require('grunt');

grunt.log.write('\n   config/tasks/development.js\n');

module.exports = {
    jshint: {
        options: {
            reporter: require('jshint-stylish')
        },
        server: assets.js.lint('src/server', ['src/server', 'src/lib', 'app.js']),
        server_support: assets.js.lint('src/server', ['Gruntfile.js', 'config']),
        server_tests: assets.js.lint('tests', ['tests/server'])
    },
    mochaTest: {
        options: {
            reporter: 'spec'
        },
        functional: {
            src: ['tests/server/functional/**/*.js']
        }
    },
    watch: {
        test: { tasks: ['test'], files: ['src/**/*.js', 'app.js', 'tests/**/*.js'] },
    },
    nodemon: {
        dev: {
            script: 'config/nodemon.js',
            options: {
                ignore: [
                    'node_modules/**',
                    'tests/**'
                ]
            }
        }
    },
    concurrent: {
        dev: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['watch', 'nodemon:dev']
        }
    }
};
