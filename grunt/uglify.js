module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            sourceMap: true,
            banner: '/*! <%= pkg.name %> ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        dist: {
            files: {
                'dist/javascript/old-fashioned.js': [
                    'src/javascript/old-fashioned.js'
                ]
            }
        }
    };

    grunt.config.set('uglify', config);
};
