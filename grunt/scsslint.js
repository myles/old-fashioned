module.exports = function (grunt) {
    var config = {
        options: {
            bundleExec: true,
            config: 'scss/.scss-lint.yml',
            reporterOutput: null
        },
        src: [
            'scss/*.scss',
            'scss/**/*.scss',
            'docs/scss/docs.scss',
            'docs/scss/**/*.scss'
        ]
    };
    
    grunt.config.set('scsslint', config);
};
