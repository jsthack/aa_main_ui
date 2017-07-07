//============================================
// GULP-FILE | STYLES + MARKUP | COS / 7.6.17
//============================================

var gulp = require('gulp');
var sass = require('gulp-sass');
livereload = require('gulp-livereload');

//STYLES
gulp.task('styles', function() {
   gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
      .pipe(livereload());
});

//MARKUP
gulp.task('markup', function() {
   gulp.src('*.html')
      .pipe(livereload());
});

//WATCH TASK
gulp.task('default',function() {
   livereload.listen();
   gulp.watch('sass/**/*.scss',['styles']);
   gulp.watch('*.html',['markup']);
});
