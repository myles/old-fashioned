module.exports = function (grunt) {
  var config = {
    options: {
      parser: require('postcss-scss'),
      processors: [
        require('precss')({})
      ]
    },
    dist: {
      src: 'dist/*.css'
    },
    site: {
      src: 'site/dist/assets/style.css'
    }
  };
  
  grunt.config.set('postcss', config);
};
