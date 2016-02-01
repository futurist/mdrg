var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');


gulp.task('html', function() {
  return gulp.src('index_src.html')
    .pipe(concat('index.html'))
    .pipe(replace(/\?##random/g, '?'+Math.random() ))
    // .pipe(minifyHtml(opts))
    .pipe(gulp.dest('./'));
})

var watcher = gulp.watch(['*.js', '*_src.html'], ['html']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['html'])

