module.exports = function (grunt) {
  var config = {
    options: {
      bundleExec: true,
      config: 'scss/.scss-lint.yml',
      reporterOutput: null
    },
    src: [
      'scss/*.scss',
      'scss/**/*.scss',
      'site/scss/style.scss',
      'site/scss/**/*.scss'
    ]
  };
  
  grunt.config.set('scsslint', config);
};
