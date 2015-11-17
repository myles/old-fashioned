module.exports = function (grunt) {
  var options = {
    loadPath: [
      './scss/',
      './bower_components/bourbon/app/assets/stylesheets/',
      './bower_components/neat/app/assets/stylesheets/',
      './bower_components/modular-scale/stylesheets/'
    ],
    precision: 6,
    sourcemap: 'auto',
    style: 'expanded',
    trace: true,
    bundleExec: true
  };
  
  var config = {
    core: {
      options: options,
      files: {
        'dist/old-fashioned.css': 'scss/old-fashioned.scss'
      }
    },
    docs: {
      options: options,
      files: {
        'docs/dist/assets/docs.css': 'docs/scss/docs.scss'
      }
    }
  };
  
  grunt.config.set('sass', config);
};
