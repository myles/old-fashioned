module.exports = function (grunt) {
    'use strict';

    var config = {
        dist: {
            options: {
                style: 'expanded',
                loadPath: ['bower_components/']
            },
            files: {
                'dist/stylesheets/old-fashioned.css': 'src/stylesheets/' +
                                                      'porcelain/prcelain.scss'
            }
        }
    };

    grunt.config.set('sass', config);
};
