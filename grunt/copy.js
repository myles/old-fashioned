module.exports = function (grunt) {
  var config = {
    main: {
      files: [
        {
          expand: true,
          flatten: true,
          src: [ 'docs/CNAME' ],
          dest: 'docs/dist/',
          filter: 'isFile'
        }
      ]
    }
  };
  
  grunt.config.set('copy', config);
};
