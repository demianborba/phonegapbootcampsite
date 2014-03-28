var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');

gulp.task('lint', function () {

    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('sass', function () {
    // create css using sass and place in the css directory
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
        .pipe(notify("sass finished and css placed in /src/css"));
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

    gulp.src('src/images/**g')
        .pipe(gulp.dest('dist/images/'));

});

gulp.task('fonts', function () {

    gulp.src('src/fonts/**')
        .pipe(gulp.dest('dist/fonts/'));

});

gulp.task('bower_components', function () {

    gulp.src('src/bower_components/snapjs/snap.js')
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/bower_components/snapjs/'));

    gulp.src('src/bower_components/snapjs/snap.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/bower_components/snapjs/'));

    gulp.src('src/bower_components/fastclick/lib/fastclick.js')
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/bower_components/fastclick/lib/'));

});

gulp.task('scripts', function () {

    gulp.src('src/js/*.js')
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(notify("js files minifed and sent to /dist"));

});

gulp.task('browser-sync', function () {
    browserSync.init(['dist/**'], {
    server: {
        baseDir: 'dist'
    }});
});

gulp.task('default', function () {

    gulp.run('lint', 'sass', 'css', 'html', 'images', 'fonts', 'bower_components', 'scripts', 'browser-sync');

    gulp.watch('src/scss/*.scss', function () {
        gulp.run('sass');
    });

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