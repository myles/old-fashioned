module.exports = function (grunt) {
    'use strict';

    var config = {
        dist: {
            options: {
                position: 'top',
                banner: '/*! <%= pkg.name %> ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            files: {
                src: [
                    'dist/stylesheets/*.css',
                    'dist/stylesheets/*.js'
                ]
            }
        }
    };

    grunt.config.set('usebanner', config);
};
