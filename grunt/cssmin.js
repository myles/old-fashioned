module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'dist/stylesheets',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/stylesheets',
                ext: '.min.css'
            }]
        }
    };

    grunt.config.set('cssmin', config);
};
