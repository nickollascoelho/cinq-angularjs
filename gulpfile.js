var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require ('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyhtml = require ('gulp-minify-html'),
    cssnano = require('gulp-cssnano'),
    jasmine = require('gulp-jasmine');


gulp.task('clean', function () {
 return gulp.src('build/', {read: false})
 .pipe(clean());
});

gulp.task('css', function() {
  return gulp.src('www/lib/assets/css/*.css')
  .pipe(concat('main.css'))
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('angular', function() {
 return gulp.src('www/lib/angular/angular.js')
 .pipe(concat('angular.js'))
 .pipe(uglify())
 .pipe(rename({suffix: '.min'}))
 .pipe(gulp.dest('build/assets/js/'));
});

gulp.task('js', function() {
 return gulp.src([
    'www/app/*.js',
    'www/app/**/*.js'
  ])
 .pipe(concat('main.js'))
 .pipe(uglify())
 .pipe(rename({suffix: '.min'}))
 .pipe(gulp.dest('build/assets/js/'));
});

gulp.task('html', function() {
  return gulp.src('www/index.html')
  .pipe(htmlreplace({
        'css': 'assets/css/main.min.css',
        'js': ['assets/js/angular.min.js', 'assets/js/main.min.js']
  }))
  .pipe(minifyhtml())
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['angular', 'js', 'css', 'html']);
