"use strict";

var gulp = require("gulp"),
    markdownToJson = require("gulp-markdown-to-json"),
    marked = require("marked"),
    highlightJS = require('highlight.js');

marked.setOptions({
  highlight: function (code) {
    var highlighted = highlightJS.highlightAuto(code).value;
    return highlighted;
  }
});

gulp.task("content", function () {
    return gulp.src("./src/content/**/*.md")
        .pipe(markdownToJson(marked))
        .pipe(gulp.dest("./build/content"));
});