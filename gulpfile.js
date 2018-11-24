var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var header = require('gulp-header');
var rename = require("gulp-rename");

gulp.task('default', [
    'del-dist',
    'minify-css'
]);

gulp.task('del-dist',function (cb) {
    del([
        'dist/*',
        'doc/public/moeui.min.css'
    ], cb);
    return console.log("delete dist success");
});
gulp.task('minify-css',function (cb) {
    return gulp.src('src/styles/*.css')
        .pipe(concat('moeui.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(header('/*\n' +
            ' * MoeUI  为OSLand开发的css样式\n' +
            ' * 未经允许使用者请自行承担后果\n' +
            ' * @version v1.0\n' +
            ' * @copyright By BoxMoe\n' +
            ' * @link github.com/BoxMoeStudios\n' +
            ' **/\n' +
            '@charset "UTF-8";'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('doc/public'));
});


