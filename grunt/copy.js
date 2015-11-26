module.exports = function (grunt) {
  var config = {
    main: {
      files: [
        {
          expand: true,
          flatten: true,
          src: [ 'site/CNAME' ],
          dest: 'site/dist/',
          filter: 'isFile'
        }
      ]
    }
  };
  
  grunt.config.set('copy', config);
};
