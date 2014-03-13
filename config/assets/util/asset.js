'use strict';

var url = require('url');
var path = require('path');
var find = require('findit');

module.exports = {
    files: function(dir, root){
        var files = [];
        var cwd = process.cwd();
        var basedir = path.join(cwd, dir);
        var baselink = path.join(cwd, root || dir);

        find.sync(basedir, function(file, stat){
            var isdir = stat.isDirectory();
            if (!isdir){
                var relative = path.relative(baselink, file);
                var link = url.resolve('/', relative);
                files.push(link);
            }
        });

        return files;
    }
};