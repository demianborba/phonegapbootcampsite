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

    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    // create css using sass and place in the css directory
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify("sass finished and css created in /dist/css"));
});

gulp.task('html', function () {

    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('partials', function () {

    gulp.src('src/partials/**')
        .pipe(gulp.dest('dist/partials/'));
});

gulp.task('images', function () {

    gulp.src('src/images/**')
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('fonts', function () {

    gulp.src('src/fonts/**')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('bower_components', function () {

    gulp.src('src/bower_components/snapjs/snap.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/bower_components/snapjs/'));

    gulp.src('src/bower_components/snapjs/snap.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/bower_components/snapjs/'));

    gulp.src('src/bower_components/fastclick/lib/fastclick.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/bower_components/fastclick/lib/'));

    gulp.src('src/bower_components/angular/angular.min.js')
        .pipe(gulp.dest('dist/bower_components/angular/'));
});

gulp.task('scripts', function () {

    gulp.src('src/js/**')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(notify("js minified and files sent to /dist"));
});

gulp.task('browser-sync', function () {
    browserSync.init(['dist/**'], {
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('default', function () {

    gulp.run('sass', 'html', 'partials', 'images', 'fonts', 'bower_components', 'lint', 'scripts');
    // gulp.run('sass', 'html', 'partials', 'images', 'fonts', 'bower_components', 'lint', 'scripts', 'browser-sync');

    gulp.watch('src/scss/*.scss', function () {
        gulp.run('sass');
    });

    gulp.watch('src/js/**', function () {
        gulp.run('lint', 'scripts');
    });

    gulp.watch('src/*.html', function () {
        gulp.run('html');
    });

    gulp.watch('src/partials/**', function () {
        gulp.run('partials');
    });
    
});