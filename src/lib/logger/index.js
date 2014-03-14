'use strict';

var _ = require('lodash');
var winston = require('winston');
var api = module.exports = { stream: function(level) {
    return {
        write: function(data){
            var message = data.replace(/\n+$/, ''); // remove trailing breaks
            api[level](message);
        }
    };
}};

var levels = ['debug', 'info', 'warn', 'error'];

_.each(levels, function(level){
    api[level] = winston[level].bind(winston);
});

require('./transports.js');
