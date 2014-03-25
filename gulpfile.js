var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

gulp.task('lint', function() {
  gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify({
            outSourceMap: true
        }))
    .pipe(rename("all-min.js"))
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('default', ['lint', 'scripts']);