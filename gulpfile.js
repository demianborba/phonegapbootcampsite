var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');

gulp.task('lint', function () {
    // check js and report errors
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('partials', function () {
    // move html partials to different platforms
    gulp.src('src/partials/**')
        .pipe(gulp.dest('dist/website/partials/'))
        .pipe(gulp.dest('dist/appios/www/partials/'))
        .pipe(gulp.dest('dist/appblackberry10/www/partials/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/partials/'));
});

gulp.task('sass', function () {
    // create css using sass and place in the css directory
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/website/css/'))
        .pipe(gulp.dest('dist/appios/www/css/'))
        .pipe(gulp.dest('dist/appblackberry10/www/css/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/css/'))
        .pipe(notify("sass finished and css created in /dist"));
});

gulp.task('images', function () {
    // move images to different platforms
    gulp.src('src/images/**')
        .pipe(gulp.dest('dist/website/images/'))
        .pipe(gulp.dest('dist/appios/www/images/'))
        .pipe(gulp.dest('dist/appblackberry10/www/images/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/images/'));
});

gulp.task('videos', function () {
    // move videos to different platforms
    gulp.src('src/videos/bootcamp.jpg')
        .pipe(gulp.dest('dist/website/videos/'));
    gulp.src('src/videos/bootcamp.mp4')
        .pipe(gulp.dest('dist/website/videos/'));
    gulp.src('src/videos/bootcamp.webm')
        .pipe(gulp.dest('dist/website/videos/'));
});

gulp.task('fonts', function () {
    // move fonts to different platforms
    gulp.src('src/fonts/**')
        .pipe(gulp.dest('dist/website/fonts/'))
        .pipe(gulp.dest('dist/appios/www/fonts/'))
        .pipe(gulp.dest('dist/appblackberry10/www/fonts/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/fonts/'));
});

gulp.task('bower_components', function () {
    // uglify snap.js from bower and move to different platforms
    gulp.src('src/bower_components/snapjs/snap.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/website/bower_components/snapjs/'))
        .pipe(gulp.dest('dist/appios/www/bower_components/snapjs/'))
        .pipe(gulp.dest('dist/appblackberry10/www/bower_components/snapjs/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/bower_components/snapjs/'));
    // minify snap.css from bower and move to different platforms
    gulp.src('src/bower_components/snapjs/snap.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/website/bower_components/snapjs/'))
        .pipe(gulp.dest('dist/appios/www/bower_components/snapjs/'))
        .pipe(gulp.dest('dist/appblackberry10/www/bower_components/snapjs/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/bower_components/snapjs/'));
    // uglify fastclick.js from bower and move to different platforms
    gulp.src('src/bower_components/fastclick/lib/fastclick.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/website/bower_components/fastclick/lib/'))
        .pipe(gulp.dest('dist/appios/www/bower_components/fastclick/lib/'))
        .pipe(gulp.dest('dist/appblackberry10/www/bower_components/fastclick/lib/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/bower_components/fastclick/lib/'));
    // move angular.min.js to different platforms
    gulp.src('src/bower_components/angular/angular.min.js')
        .pipe(gulp.dest('dist/website/bower_components/angular/'))
        .pipe(gulp.dest('dist/appios/www/bower_components/angular/'))
        .pipe(gulp.dest('dist/appblackberry10/www/bower_components/angular/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/bower_components/angular/'));
    // move angular.min.js.map to different platforms
    gulp.src('src/bower_components/angular/angular.min.js.map')
        .pipe(gulp.dest('dist/website/bower_components/angular/'))
        .pipe(gulp.dest('dist/appios/www/bower_components/angular/'))
        .pipe(gulp.dest('dist/appblackberry10/www/bower_components/angular/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/bower_components/angular/'));
});

gulp.task('scripts', function () {
    // uglify js files and move to different platforms
    gulp.src('src/js/**')
        .pipe(uglify())
        .pipe(gulp.dest('dist/website/js/'))
        .pipe(gulp.dest('dist/appios/www/js/'))
        .pipe(gulp.dest('dist/appblackberry10/www/js/'))
        .pipe(gulp.dest('dist/appandroid/assets/www/js/'))
        .pipe(notify("js minified and files sent to /dist"));
});

gulp.task('browser-sync', function () {
    browserSync.init(['dist/website/**'], {
        server: {
            baseDir: 'dist/website'
        }
    });
});

gulp.task('watch-sass', function () {
    // watch when .scss files change, and run task 'sass'
    gulp.watch(['src/scss/*.scss'], ['sass']);
});

gulp.task('watch-js', function () {
    // watch when .js files change, and run tasks 'lint' and 'scripts'
    gulp.watch(['src/js/**'], ['lint', 'scripts']);
});

gulp.task('watch-partials', function () {
    // watch when .html files change, and run task 'partials'
    gulp.watch(['src/partials/**'], ['partials']);
});

// DEFAULT TASK
gulp.task('default', ['sass', 'partials', 'images', 'videos', 'fonts', 'bower_components', 'lint', 'scripts', 'watch-sass', 'watch-js', 'watch-partials']);

// DEFAULT TASK with browser-sync
//gulp.task('default', ['sass', 'partials', 'images', 'videos', 'fonts', 'bower_components', 'lint', 'scripts', 'browser-sync', 'watch-sass', 'watch-js', 'watch-partials']);