var gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    template = require('gulp-template'),
    templateCache = require('gulp-angular-templatecache');

var minifyHtmlOpts = {
    empty: true,
    cdata: true,
    conditionals: true,
    spare: true,
    quotes: true
};

gulp.task('shop-bootstrap3', function () {
    gulp.src('template/bootstrap3/*.html')
        .pipe(template({paypal: false}))
        .pipe(minifyHtml(minifyHtmlOpts))
        .pipe(templateCache('shop-tpls-bootstrap3.js', {standalone: true, module: 'shop.templates'}))
        .pipe(gulp.dest('src'));
});

gulp.task('paypal-bootstrap3', function () {
    gulp.src('template/bootstrap3/*.html')
        .pipe(template({paypal: true}))
        .pipe(minifyHtml(minifyHtmlOpts))
        .pipe(templateCache('paypal-tpls-bootstrap3.js', {standalone: true, module: 'shop.templates'}))
        .pipe(gulp.dest('src'));
});

gulp.task('default', ['shop-bootstrap3', 'paypal-bootstrap3']);