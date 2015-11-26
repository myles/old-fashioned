module.exports = function (grunt) {
  var config = {
    dist: ['./dist/'],
    site_dist: ['./site/dist/']
  };
  
  grunt.config.set('clean', config);
};
