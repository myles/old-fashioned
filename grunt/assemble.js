module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            assets: 'dist/',
            plugins: ['permalinks'],
            partials: ['docs/_includes/**/*.hbs'],
            layoutdir: 'docs/_layouts/',
            layout: 'base.hbs',
            data: ['docs/_data/*.{json,yaml,yml}']
        },
        pages: {
            options: {
                flatten: true
            },
            src: ['docs/pages/**/*.hbs'],
            dest: 'dist/docs/'
        },
        porcelain: {
            expand: true,
            cwd: 'docs/porcelain/',
            src: ['**/*.hbs'],
            dest: 'dist/docs/porcelain/'
        }
    };

    grunt.config.set('assemble', config);
};
