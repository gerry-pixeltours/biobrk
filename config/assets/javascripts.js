'use strict';

var _ = require('lodash');
var path = require('path');
var asset = require('./util/asset.js');

module.exports = {
    lint: function(base, glob){
        return {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: glob
            }
        };
    }
};