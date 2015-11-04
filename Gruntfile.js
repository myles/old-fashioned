module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        bower: grunt.file.readJSON('bower.json'),
        package: grunt.file.readJSON('package.json')
    });

    grunt.task.loadTasks('./grunt/');

    // Load all the grunt packages.
    Object.keys(
        require('./package.json').devDependencies
    ).forEach(function (dep) {
        if (dep.substring(0, 6) === 'grunt-') {
            grunt.loadNpmTasks(dep);
        }
    });

    grunt.loadNpmTasks('assemble');
};
