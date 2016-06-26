var gulp = require('gulp');

var paths = {
    fonts: ['./fonts/**/*'],
    styles: ['./scss/**/*.scss'],
    html: './index.html',
    scripts: ['./js/app.js', '!client/external/**/*.coffee'],
    images: './img/**/*'
};

var sass = require('gulp-sass');
gulp.task('styles', function() {
    // Do CSS-related tasks
    return gulp.src(paths.styles)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./public/css'));
});

var browserify = require('gulp-browserify');
gulp.task('js', function() {
    // Do JS-related tasks
    gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor', function() {
    gulp.src('./node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('./public/js'));

    gulp.src('./node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
        .pipe(gulp.dest('./public/js'));
});

var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
    // Do HTML-related tasks
    gulp.src(paths.html)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('image', function() {
    gulp.src(paths.images)
        .pipe(gulp.dest('./public/img'));
});

gulp.task('fonts', function() {
    gulp.src(paths.fonts)
        .pipe(gulp.dest('./public/fonts'));
});

var surge = require('gulp-surge')
gulp.task('deploy', [], function() {
    return surge({
        project: './public', // Path to your static build directory
        domain: 'sorta-friend.surge.sh' // Your domain or Surge subdomain
    })
})

gulp.task('watch', function() {
    gulp.watch('./node_modules/jquery/dist/jquery.js', ['jquery']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.fonts, ['fonts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('default', [ 'watch','styles', 'vendor', 'js', 'html']);
