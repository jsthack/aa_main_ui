//============================================
// GULP-FILE | STYLES + MARKUP | COS / 7.6.17
//============================================

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

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

//JAVASCRIPT
var jsFiles = 'js/**/*.js',
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

//WATCH TASK
gulp.task('default',function() {
   livereload.listen();
   gulp.watch('sass/**/*.scss',['styles']);
   gulp.watch('*.html',['markup']);
});
