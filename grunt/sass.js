module.exports = function (grunt) {
    'use strict';

    var config = {
        dist: {
            options: {
                bundleExec: true,
                style: 'expanded',
                loadPath: [
                    'bower_components/',
                    'src/stylesheets/'
                ]
            },
            files: {
                'dist/stylesheets/old-fashioned.css': 'src/stylesheets/' +
                                                      'porcelain/porcelain.scss'
            }
        }
    };

    grunt.config.set('sass', config);
};
