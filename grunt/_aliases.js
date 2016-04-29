module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('test', [
        'scsslint'
    ]);

    grunt.registerTask('develop', [
        'clean:dist',
        'sass:dist',
        'svgmin:dist',
        'uglify:dist',
        'assemble',
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'sass:dist',
        'cssmin:dist',
        'svgmin:dist',
        'uglify:dist',
        'usebanner:dist'
    ]);

    grunt.registerTask('build:docs', [
        'build',
        'assemble'
    ]);

    grunt.registerTask('default', ['build']);
};
