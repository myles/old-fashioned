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
  
  grunt.registerTask('docs:deploy', [
    'clean:docs_dist',
    'docs',
    'copy',
    'gh-pages:local'
  ]);
  
  grunt.registerTask('docs:deploy:travis', [
    'docs',
    'copy',
    'gh-pages:travis'
  ]);
  
  grunt.registerTask('build', [
    'clean:dist',
    'sass:core',
    'cssmin'
  ]);
};
