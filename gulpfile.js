var gulp = require("gulp");

var useref = require('gulp-useref');

var clean = require('gulp-clean');
gulp.task('clean-dist', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('clean-temp', function () {
    return gulp.src('temp', {read: false})
        .pipe(clean());
});

var templateCache = require("gulp-angular-templatecache");
gulp.task('views', function() {
  
  return gulp.src('./views/**/*.html')
    .pipe(templateCache('temp/views.js', { root: './views', module:'team-viewer' }))
    .pipe(gulp.dest('./'));
})

var Builder = require('systemjs-builder');
gulp.task('bundle', ['views'], function (done) {
    var builder = new Builder('./', './config.js');
    builder
		.buildStatic('scripts/main.js + temp/views.js', 'dist/scripts/main.min.js', { minify: true})
		.then(function() {
		  console.log('Bundle complete');
		  done();
		})
});

var debug = require("gulp-debug");
var inject = require("gulp-inject");
gulp.task('inject', ['bundle'], function () {
	var jsSource = gulp.src('./dist/scripts/main.min.js', {read: false})
		.pipe(debug());

    return gulp.src('./index.html')
    	.pipe(debug())
        .pipe(inject(jsSource, { relative: true}))     	
        .pipe(useref())
    	.pipe(gulp.dest('./dist'))
});

var runSequence = require("run-sequence");
gulp.task('build', function () {
    runSequence(
        'clean-dist',
        'inject',
        'clean-temp'
    );
});