'use strict';

var path = require('path'),
    util = require('util'),
    nconf = require('nconf'),
    moment = require('moment'),
    pkg,
    env;

function file (name, secure) {
    var location = secure === false ? '.' : 'private';
    var filename = util.format('%s/%s.json', location, name);
    var filepath = path.join(__dirname, filename);

    nconf.file(name, filepath);
}

moment.defaultFormat = 'YYYY-MMM-DD HH:mm:ss';

nconf.use('memory');
nconf.argv();
nconf.env();

env = nconf.get('NODE_ENV') || 'development';

file('locals');
file(env);
file('defaults', false);

console.log('%s - Loaded configuration for \'%s\' environment', moment().format(), env);

require('./globals.js');

pkg = require_cwd('package.json');

nconf.set('BUILD_VERSION', pkg.version);
