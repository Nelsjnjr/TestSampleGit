var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var coffeeSources = ['scripts/hello.coffee'],
    jsSources = ['scripts/*.js'],
    sassSources = ['styles/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'App_Data';


gulp.task('log', function() {
    gutil.log('== My First Task ==')
});

gulp.task('copy', function() {
    gulp.src('about.aspx')
    .pipe(gulp.dest(outputDir))
});


gulp.task('default', ['copy','log']);