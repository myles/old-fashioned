module.exports = function (grunt) {
    grunt.registerTask('test', [
        'scsslint'
    ]);
    
    grunt.registerTask('docs', [
        'sass:docs',
        'assemble'
    ]);
    
    grunt.registerTask('docs:develop', [
        'docs',
        'connect',
        'watch'
    ]);
    
    grunt.registerTask('build', [
        'sass:core'
    ]);
};