'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

function clean() {
  return del(['./dist/css']);
}

function cssProcess() {
  var plugins = [autoprefixer(), cssnano()];
  return gulp
    .src(['css/**/*.*'])
    .pipe(concat('style.min.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist/css'));
}

const build = gulp.series(
  clean,
  gulp.parallel(
    cssProcess,
  ),
);

exports.build = build;
exports.default = build;
