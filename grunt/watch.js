module.exports = function (grunt) {
  var config = {
    options: {
      livereload: true
    },
    assemble: {
      tasks: [
        'assemble'
      ],
      files: [
        'site/pages/*.hbs',
        'site/template/**/*.js',
        'site/templates/**/*.hbs',
        'site/templates/**/*.yml',
        'site/templates/**/*.json'
      ]
    },
    sass: {
      tasks: [
        'sass:site'
      ],
      files: [
        'scss/*.scss',
        'scss/**/*.scss',
        'site/scss/**/*.scss',
        'site/scss/style.scss'
      ]
    }
  };
  
  grunt.config.set('watch', config);
}
