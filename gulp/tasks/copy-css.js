"use strict";

var gulp = require("gulp"),
    fs = require("fs"),
    minifyCSS = require("gulp-minify-css");

gulp.task("copy-css", ["sass"], function () {
    var siteData = JSON.parse(fs.readFileSync("./site.json", "utf8"));
    var styleSheet = "main.css";
    if (siteData.styleSheet) {
        styleSheet = siteData.styleSheet;
    }
    return gulp.src(["./dist/css/**/*.css", "!./dist/css/**/" + styleSheet])
        .pipe(minifyCSS())
        .pipe(gulp.dest("./build/css"));
});
