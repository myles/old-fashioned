'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: grunt.file.readJSON('bower.json')
    });

    grunt.task.loadTasks('./grunt/');
};
