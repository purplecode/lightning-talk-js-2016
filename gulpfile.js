var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

var paths = {
    src: './src/**/*',
    index: './src/index.jade',
    styles: './src/styles/**/*.css',
    images: './src/images/**/*'
};

function build() {
    gulp.src(paths.index)
        .pipe(jade({}))
        .pipe(gulp.dest('.'));
}

gulp.task('build', function () {
    build();
});

gulp.task('watch', function () {
    gulp.watch(paths.src, function () {
        build();
    });
});

gulp.task('server', function () {
    gulp.src('.')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            open: true
        }));
});

