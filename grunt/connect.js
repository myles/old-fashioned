module.exports = function (grunt) {
  var config = {
    server: {
      options: {
        port: 4000,
        hostname: "127.0.0.1",
        base: "site/dist",
        livereload: true
      }
    }
  };
  
  grunt.config.set('connect', config);
};
