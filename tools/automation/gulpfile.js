// Import the module
const gulp = require('gulp');
const server = require('gulp-server-livereload');

// Create a task to automate
gulp.task('build', function(cb){
  console.log('Building the site');
  setTimeout(cb, 1200);
});
/*
  In package.json, create a custom script:
  "build" : "gulp build"
  To run it, type in the console:
  $npm run build
*/


// Create another task to automate
gulp.task('serve', function(cb){
  gulp.src('www')
      .pipe(server({
        livereload: true,
        open: true,
      }));
});
/*
  Repeat the previous step by adding the script:
  "serve": "gulp serve"
  To run it, type in the console:
  $npm run serve
*/


/*
  If you want to execute 2 (or more) tasks consecutively,
  use .series()
*/
gulp.task('default', gulp.series('build', 'serve'));
/*
  Repeat the previous step by adding the script:
  "start": "gulp"
  To run it, type in the console:
  $npm run start
*/