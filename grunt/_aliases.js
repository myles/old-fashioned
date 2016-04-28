module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('test', [
        'scsslint'
    ]);

    grunt.registerTask('develop', [
        'clean:dist',
        'sass:dist',
        'assemble',
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'sass:dist',
        'cssmin:dist',
        'usebanner:dist'
    ]);

    grunt.registerTask('build:docs', [
        'build',
        'assemble'
    ]);

    grunt.registerTask('default', ['build']);
};
