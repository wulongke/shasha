var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("compileSass",function(){
   return gulp.src("./src/sass/details/*.scss")
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest("./src/css/details/"))

})

gulp.task("jt",function(){
    gulp.watch("./src/sass/details/*.scss",gulp.series("compileSass"))
})
