'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var del = require('del');
var angularFilesort = require('gulp-angular-filesort');
var karma = require('gulp-karma');
var path = require('path');
var templateCache = require('gulp-angular-templatecache');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./.tmp/css'));
});

gulp.task('dist:sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(replace('src/assets/', '../assets/'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    return gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: false,
            defaultFile: './.tmp/index.html'
        }));
});

gulp.task('serve:inject', ['sass', 'sass:watch', 'serve:copy'], function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src('./src/**/*.js').pipe(angularFilesort()), {relative: false, name: 'app'}))
        .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {relative: false, name: 'vendor'}))
        .pipe(inject(gulp.src('./.tmp/css/index.css ', {read: false}), {relative: false, name: 'app'}))
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('dist:inject', ['dist:sass', 'dist:copy:js', 'dist:copy:js:html', 'dist:copy:html'], function () {
    return gulp.src('./dist/index.html')
        .pipe(inject(gulp.src(['./dist/js/app.js', './dist/js/templates.js'], {read: false}), {
            relative: true,
            name: 'app'
        }))
        .pipe(inject(gulp.src('./dist/js/vendor.js', {read: false}), {relative: true, name: 'vendor'}))
        .pipe(inject(gulp.src('./dist/css/index.css ', {read: false}), {relative: true, name: 'app'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('serve:copy:font', function () {
    return gulp
        .src('./src/sass/fonts/*')
        .pipe(gulp.dest('./.tmp/css/fonts'));
});

gulp.task('serve:copy:assets', function () {
    return gulp
        .src('./src/assets/**/*')
        .pipe(gulp.dest('./.tmp/assets'));
});

gulp.task('serve:copy', ['serve:copy:font']);


gulp.task('dist:copy:font', function () {
    gulp
        .src('./src/sass/fonts/*')
        .pipe(gulp.dest('./dist/css/fonts'));
});

gulp.task('dist:copy:assets', function () {
    gulp
        .src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('dist:copy:js:vendor', function () {
    return gulp
        .src(mainBowerFiles())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));

});

gulp.task('dist:copy:js:app', function () {
    return gulp
        .src('./src/**/*.js')
        .pipe(angularFilesort())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));

});

gulp.task('dist:copy:js:html', function () {
    return gulp.src('src/app/**/*.html')
        .pipe(templateCache({module: 'CompuCorpApp', root: 'src/app'}))
        .pipe(replace('src/assets/', 'assets/'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('dist:copy:html', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));

});

gulp.task('dist:copy:js', ['dist:copy:js:vendor', 'dist:copy:js:app']);

gulp.task('dist:clean', function () {
    return del(['./dist']);
});

gulp.task('dist:copy', ['dist:copy:font', 'dist:copy:assets']);

gulp.task('serve', ['serve:inject', 'webserver']);

gulp.task('dist', ['dist:sass', 'dist:copy', 'dist:inject']);


var pathSrcHtml = [
    'src/**/*.html'
];

var pathSrcJs = [
    'src/app/module.js'
];

gulp.task('test', function () {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            this.emit('end'); //instead of erroring the stream, end it
        });
});

gulp.task('autotest', function () {
    return gulp.watch(['test/**/*.js'], ['test']);
});