var gulp = require('gulp');
var stylus = require('gulp-stylus');

var paths = {
  stylus: ['./dev/tenxun/stylus/*']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm

gulp.task('stylus', function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({compress:true}))  //compress
    .pipe(gulp.dest('./pro/tenxun/css'));
});
// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch','stylus']);