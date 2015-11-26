module.exports = function (grunt) {
  grunt.registerTask('test', [
    'scsslint'
  ]);
  
  grunt.registerTask('site', [
    'exec:docs_update',
    'sass:site',
    'postcss:site',
    'assemble'
  ]);
  
  grunt.registerTask('site:develop', [
    'site',
    'connect',
    'watch'
  ]);
  
  grunt.registerTask('site:deploy', [
    'clean:site_dist',
    'site',
    'copy',
    'gh-pages:local'
  ]);
  
  grunt.registerTask('site:deploy:travis', [
    'site',
    'copy',
    'gh-pages:travis'
  ]);
  
  grunt.registerTask('build', [
    'clean:dist',
    'sass:core',
    'postcss:dist',
    'cssmin'
  ]);
};
