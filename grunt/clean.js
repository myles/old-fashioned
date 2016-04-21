module.exports = function (grunt) {
    'use strict';

    var config = {
        dist: [
            'dist/**/*',
        ]
    };

    grunt.config.set('clean', config);
};
