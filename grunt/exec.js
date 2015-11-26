module.exports = function (grunt) {
  var config = {
    docs_update: 'git submodule foreach git pull origin master'
  };
  
  grunt.config.set('exec', config);
};
