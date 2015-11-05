module.exports = function (grunt) {
  var config = {
    options: {
      branch: 'gh-pages',
      base: 'docs/dist'
    },
    local: {
      options: {
        user: {
          name: 'travis',
          email: 'user@dev.null'
        },
        repo: 'https://github.com/myles/old-fashioned.git',
        message: 'local deploy'
      }
      src: ['**']
    },
    travis: {
      options: {
        user: {
          name: 'travis',
          email: 'user@dev.null'
        },
        repo: 'https://' + process.env.GH_TOKEN + '@github.com/myles/old-fashioned.git',
        message: 'travis deploy',
        silent: true
      }
    }
  };
  
  grunt.config.set('gh-pages', config);
};
