module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }
            ]
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['images/**/*.svg'],
                dest: 'dist/',
                ext: '.svg'
            }]
        }
    };

    grunt.config.set('svgmin', config);
};
