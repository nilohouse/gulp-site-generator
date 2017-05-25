"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass");

gulp.task("sass", function () {
    return gulp.src("./src/sass/styleguide/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css/")),

    gulp.src("./src/sass/app/**/*.scss")
    	.pipe(sass())
        .pipe(gulp.dest("./dist/css/"));
});		
