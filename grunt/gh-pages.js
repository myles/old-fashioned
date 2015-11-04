module.exports = function (grunt) {
    var config = {
			options: {
				base: 'docs/dist'
			},
			src: ['**']
    };
    
    grunt.config.set('gh-pages', config);
};
