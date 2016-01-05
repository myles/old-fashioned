'use strict';

// modules
var assemble = require('fabricator-assemble'),
    browserSync = require('browser-sync'),
    csso = require('gulp-csso'),
    del = require('del'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    reload = browserSync.reload,
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack'),
    ghPages = require('gulp-gh-pages');


// configuration
var config = {
    dev: gutil.env.dev,
    src: {
        scripts: {
            fabricator: './src/assets/fabricator/scripts/fabricator.js',
            toolkit: './src/assets/toolkit/scripts/toolkit.js'
        },
        styles: {
            fabricator: 'src/assets/fabricator/styles/fabricator.scss',
            toolkit: 'src/assets/toolkit/styles/toolkit.scss',
            include_paths: [
                './bower_components/bourbon/app/assets/stylesheets/',
                './bower_components/neat/app/assets/stylesheets/',
                './bower_components/modular-scale/stylesheets/'
            ]
        },
        images: 'src/assets/toolkit/images/**/*',
        views: 'src/toolkit/views/*.html'
    },
    dest: 'dist',
    bower: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery/dist/jquery.min.map',
        'bower_components/svg-injector/dist/svg-injector.min.js',
        'bower_components/svg-injector/dist/svg-injector.map.js'
    ]
};


// webpack
var webpackConfig = require('./webpack.config')(config);
var webpackCompiler = webpack(webpackConfig);


// clean
gulp.task('clean', function (cb) {
    del([config.dest], cb);
});


// styles
gulp.task('styles:fabricator', function () {
    gulp.src(config.src.styles.fabricator)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 1 version'))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(rename('f.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
        .pipe(gulpif(config.dev, reload({stream: true})));
});

gulp.task('styles:toolkit', function () {
    gulp.src(config.src.styles.toolkit)
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: config.src.styles.include_paths}).on('error', sass.logError))
        .pipe(prefix('last 1 version'))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest + '/assets/toolkit/styles'))
        .pipe(gulpif(config.dev, reload({stream: true})));
});

gulp.task('styles', ['styles:fabricator', 'styles:toolkit']);


// scripts
gulp.task('scripts', function (done) {
    webpackCompiler.run(function (error, result) {
        if (error) {
            gutil.log(gutil.colors.red(error));
        }
        result = result.toJson();
        if (result.errors.length) {
            result.errors.forEach(function (error) {
                gutil.log(gutil.colors.red(error));
            });
        }
        done();
    });
});


// images
gulp.task('images', ['favicon'], function () {
    return gulp.src(config.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest + '/assets/toolkit/images'));
});

gulp.task('favicon', function () {
    return gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.dest));
});


// bower copy
gulp.task('bower', function () {
    for (var i = 0; i < config.bower.length; i++) {
        gulp.src(config.bower[i])
            .pipe(gulp.dest(config.dest + '/assets/libs'));
    }
});


// github cname file
gulp.task('cname', function () {
    return gulp.src('./src/CNAME')
        .pipe(gulp.dest(config.dest));
});


// assemble
gulp.task('assemble', function (done) {
    assemble({
        logErrors: config.dev
    });
    done();
});


// server
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: config.dest
        },
        notify: false,
        logPrefix: 'FABRICATOR'
    });

    /**
     * Because webpackCompiler.watch() isn't being used
     * manually remove the changed file path from the cache
     */
    function webpackCache(e) {
        var keys = Object.keys(webpackConfig.cache),
            matchedKey,
            keyIndex,
            key;
        for (keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
            key = keys[keyIndex];
            if (key.indexOf(e.path) !== -1) {
                matchedKey = key;
                break;
            }
        }
        if (matchedKey) {
            delete webpackConfig.cache[matchedKey];
        }
    }

    gulp.task('assemble:watch', ['assemble'], reload);
    gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

    gulp.task('styles:fabricator:watch', ['styles:fabricator']);
    gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

    gulp.task('styles:toolkit:watch', ['styles:toolkit']);
    gulp.watch('src/assets/toolkit/styles/**/*.scss', ['styles:toolkit:watch']);

    gulp.task('scripts:watch', ['scripts'], reload);
    gulp.watch('src/assets/{fabricator,toolkit}/scripts/**/*.js', ['scripts:watch']).on('change', webpackCache);

    gulp.task('images:watch', ['images'], reload);
    gulp.watch(config.src.images, ['images:watch']);
});


// deploy
gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});


// default build task
gulp.task('default', ['clean'], function () {
    // define build tasks
    var tasks = [
        'styles',
        'scripts',
        'images',
        'bower',
        'assemble',
        'cname'
    ];

    // run build
    runSequence(tasks, function () {
        if (config.dev) {
            gulp.start('serve');
        }
    });
});
