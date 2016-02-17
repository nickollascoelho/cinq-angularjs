var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require ('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyhtml = require ('gulp-minify-html'),
    jasmine = require('gulp-jasmine');


gulp.task('clean', function () {
 return gulp.src('build/', {read: false})
 .pipe(clean())
});
