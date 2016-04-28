module.exports = function (grunt) {
    'use strict';

    var config = {
        sass: {
            files: ['src/stylesheets/**/*.scss'],
            tasks: ['sass:dist'],
            options: {
                livereload: true
            }
        },
        docs: {
            files: ['docs/**/*.hbs'],
            tasks: ['assemble'],
            options: {
                livereload: true
            }
        }
    };

    grunt.config.set('watch', config);
};
