module.exports = function (grunt) {
	grunt.registerTask('test', [
		'scsslint'
	]);
	
	grunt.registerTask('docs', [
		'sass:docs',
		'assemble'
	]);
	
	grunt.registerTask('docs:develop', [
		'docs',
		'connect',
		'watch'
	]);
	
	grunt.registerTask('docs:deploy', [
		'clean:docs_dist',
		'docs',
		'gh-pages'
	]);
	
	grunt.registerTask('build', [
		'clean:dist',
		'sass:core'
	]);
};