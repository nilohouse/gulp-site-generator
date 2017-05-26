"use strict";

var gulp = require("gulp"),
    glob = require("glob"),
    uncss = require("gulp-uncss"),
    minifyCSS = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    fs = require("fs");

gulp.task("uncss", ["copy-css"], function () {
    var siteData = JSON.parse(fs.readFileSync("./site.json", "utf8"));
    var uncssIgnore;
    if (siteData.uncssIgnore) {
        uncssIgnore = siteData.uncssIgnore;
    }
    return gulp.src("./dist/css/main.css")
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./build/css")),

    gulp.src("./dist/css/styleguide.css")
        .pipe(uncss({
            html: glob.sync("./build/**/*.html"),
            ignore: uncssIgnore
        }))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./build/css"));
});
