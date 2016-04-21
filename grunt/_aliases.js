module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('test', [
        'scsslint'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'sass:dist',
        'cssmin:dist',
        'usebanner:dist'
    ]);

    grunt.registerTask('default', ['build']);
};
