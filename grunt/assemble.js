module.exports = function (grunt) {
  var config = {
    options: {
      flatten: true,
      assets: 'docs/dist/assets',
      partials: ['docs/templates/includes/*.hbs'],
      helpers: ['docs/templates/helpers/helper-*.js'],
      layout: 'docs/templates/layouts/default.hbs',
      data: ['docs/template/data/*.{json,yml}']
    },
    pages: {
      src: 'docs/pages/*.hbs',
      dest: 'docs/dist/'
    }
  };
  
  grunt.config.set('assemble', config);
};
