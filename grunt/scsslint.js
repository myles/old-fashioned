module.exports = function (grunt) {
    'use strict';

    var config = {
        allFiles: [
            'src/stylesheets/**/*.scss'
        ],
        options: {
            bundleExec: true,
            config: '.scss-lint.yml'
        }
    };

    grunt.config.set('scsslint', config);
};
