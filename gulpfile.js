"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var sassLint = require("gulp-sass-lint");

gulp.task("sass", function() {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("default", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("lint", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
