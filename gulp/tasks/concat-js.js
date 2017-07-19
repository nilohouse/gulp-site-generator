"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    fs = require("fs");

gulp.task("concat-js", function () {
    //var siteData = JSON.parse(fs.readFileSync("./site.json", "utf8"));
    
    var jsFilesApp = ["./src/js/app/*.js"];
    var jsFilesStyleguide = ["./src/js/styleguide/*.js"];
    
    /*
    if (siteData.concatJs) {
        jsFilesApp = siteData.concatJs;
    }
    if (siteData.concatJs) {
        jsFilesStyleguide = siteData.concatJs;
    }
    */
    
    return gulp.src(jsFilesApp)
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./build/js")),
        
	gulp.src(jsFilesStyleguide)
        .pipe(concat("styleguide.js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./build/js"));
});
