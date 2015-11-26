module.exports = function (grunt) {
  var config = {
    options: {
      flatten: true,
      assets: 'site/dist/assets',
      partials: ['site/templates/includes/*.hbs'],
      helpers: ['site/templates/helpers/helper-*.js'],
      layoutdir: 'site/templates/layouts',
      layout: 'default.hbs',
      data: [
        'bower.json',
        'packages.json',
        'site/templates/data/*.{json,yml}'
      ]
    },
    pages: {
      expand: true,
      cwd: 'site/pages',
      src: ['*.hbs'],
      dest: 'site/dist/'
    },
    docs: {
      expand: true,
      engine: 'handlebars',
      cwd: 'docs',
      src: ['*.md'],
      dest: 'site/dist/docs/'
    }
  };
  
  grunt.config.set('assemble', config);
};
