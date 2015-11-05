module.exports = function (grunt) {
  var config = {
    options: {
      sourceMap: true
    },
    target: {
      files: [{
        expand: true,
        cwd: 'dist',
        src: ['*.css', '!*.min.css'],
        dest: 'dist',
        ext: '.min.css'
      }]
    }
  };
  
  grunt.config.set('cssmin', config);
};
