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
        'docs/pages/*.hbs',
        'docs/templates/**/*.hbs',
        'docs/templates/**/*.yml',
        'docs/templates/**/*.json'
      ]
    },
    sass: {
      tasks: [
        'sass:docs'
      ],
      files: [
        'scss/*.scss',
        'scss/**/*.scss',
        'docs/scss/**/*.scss',
        'docs/scss/docs.scss'
      ]
    }
  };
  
  grunt.config.set('watch', config);
}
