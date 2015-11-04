module.exports = function (grunt) {
  var config = {
    options: {
      flatten: true,
      assets: 'docs/dist/assets',
      partials: ['docs/templates/includes/*.hbs'],
      helpers: ['docs/templates/helpers/helper-*.js'],
			layoutdir: 'docs/templates/layouts',
      layout: 'default.hbs',
      data: [
				'bower.json',
				'packages.json',
				'docs/template/data/*.{json,yml}'
			]
    },
    pages: {
			expand: true,
			cwd: 'docs/pages',
			src: ['*.hbs'],
      dest: 'docs/dist/'
    }
  };
  
  grunt.config.set('assemble', config);
};
