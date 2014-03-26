var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat');

gulp.task('lint', function () {

    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('css', function () {

    // minify and load CSS to dist
    gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify("css files minifed and sent to /dist"));

});

gulp.task('html', function () {

    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));

});

gulp.task('images', function () {

    gulp.src('src/images/**')
        .pipe(gulp.dest('dist/images/'));

});

gulp.task('fonts', function () {

    gulp.src('src/fonts/**')
        .pipe(gulp.dest('dist/fonts/'));

});

gulp.task('3rdpartyjsfiles', function () {

    gulp.src('src/bower_components/snapjs/snap.min.js')
        .pipe(gulp.dest('dist/bower_components/snapjs/'));

    gulp.src('src/bower_components/snapjs/snap.css')
        .pipe(gulp.dest('dist/bower_components/snapjs/'));

});

gulp.task('scripts', function () {

    gulp.src('src/js/*.js')
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(notify("js files minifed and sent to /dist"));

});

gulp.task('default', function () {

    gulp.run('lint', 'css', 'html', 'images', 'fonts', '3rdpartyjsfiles', 'scripts');

    gulp.watch('src/css/*.css', function () {
        gulp.run('css');
    });

    gulp.watch('src/js/*.js', function () {
        gulp.run('lint', 'scripts');
    });

    gulp.watch('src/*.html', function () {
        gulp.run('html');
    });

});