module.exports = function (grunt) {
    var config = {
			dist: ['./dist/'],
			docs_dist: ['./docs/dist/']
    };
    
    grunt.config.set('clean', config);
};
