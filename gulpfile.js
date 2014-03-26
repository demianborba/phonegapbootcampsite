var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

gulp.task('lint', function () {

    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('scripts', function () {
    
    // load only necessary files to dist
    gulp.src('src/bower_components/snapjs/snap.min.js')
        .pipe(gulp.dest('dist/bower_components/snapjs/'))
    gulp.src('src/bower_components/snapjs/snap.css')
        .pipe(gulp.dest('dist/bower_components/snapjs/'))
    
    // load assets
    gulp.src('src/assets/*')
        .pipe(gulp.dest('dist/assets/'))
    
    // uglify and load JS
    gulp.src('src/js/*.js')
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/js/'))
    
    // load CSS
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css/'))
    
    // uglify and load all html files to dist
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))

});

gulp.task('default', ['lint', 'scripts']);