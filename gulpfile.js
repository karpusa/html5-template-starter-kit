var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    nunjucksRender = require('gulp-nunjucks-render'),
    path = require('path'),
    del = require('del'),
    less = require('gulp-less'),
    minify = require('gulp-minify'),
    imagemin = require('gulp-imagemin'),
    lessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new lessAutoprefix({
        browsers: [
            "last 2 versions",
            "ie 10",
            "iOS >= 6"
        ]
    }),
    // js files
    js_files = [
        'bower_components/jquery/dist/jquery.js',
        'app/js/**/*'
    ];

// serve files
gulp.task('serve', function() {
    browserSync({
        browser: "chrome",
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch("app/less/**/*.less", ['less']);
    gulp.watch("app/i/**/*", ['image']);
    gulp.watch("app/js/**/*", ['js']);
    gulp.watch("app/template/**/*.+(html)", ['nunjucks']); //.on('change', browserSync.reload);
});

// compile tempate
gulp.task('nunjucks', function() {
    // configuring the templates folder for nunjucks
    nunjucksRender.nunjucks.configure(['app/template/']);
    // template files
    return gulp.src('app/template/page/**/*.+(html)')
        .pipe(nunjucksRender())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// compile less
gulp.task('less', function() {
    return gulp.src('app/less/style.less')
        .pipe(less({
            plugins: [autoprefix, require('less-plugin-glob')]
        }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

// compress images
gulp.task('image', function() {
    return gulp.src('app/i/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/i/'))
        .pipe(browserSync.stream());
});

// buils js
gulp.task('js', function () {
  return gulp.src(js_files)
    .pipe(minify({
        ext: {
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// clean dist folder
gulp.task('clean', function () {
  return del([
    'dist/**/*',
    '!dist/.gitkeep'
  ]);
});

// default task to be run with gulp
gulp.task('default', ['clean', 'nunjucks', 'less', 'serve', 'image']);

// build
gulp.task('build', ['clean', 'image', 'nunjucks', 'less']);