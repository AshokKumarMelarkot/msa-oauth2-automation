'use strict';

let gulp = require('gulp');

let $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

let gulpSequence = require('gulp-sequence').use(gulp);
let reporter = require('gulp-protractor-cucumber-html-report');
let path = require('path');
// let argv = require('yargs').argv;
let replace = require('gulp-replace');
let fs = require('fs-extra');
let ts = require('gulp-typescript');
let protractor = require("gulp-protractor");
let request = require('request');
let del = require('del');
let cucumber = require('gulp-cucumber');
let config = JSON.parse(fs.readFileSync('cucumber.json', 'utf8'));


module.exports = function (options) {

    gulp.task('transpile-e2e', function () {
        return gulp.src('OAuth2API/**/*.ts')
            .pipe(
                ts({
                    "target": "es5",
                    "noEmitOnError": true,
                    "skipLibCheck": true
                })
            )
            .pipe(gulp.dest(options.tmp + '/OAuth2API'))
            .pipe($.wait(2000));
    });

    gulp.task('copytestdata-e2e', function () {
        return gulp.src('OAuth2API/**/*.{pdf,jpg,jpeg,png}')
            .pipe(gulp.dest('.tmp/OAuth2API'));
    });

    gulp.task('clean', function (done) {
        $.del([options.tmp + '*', 'reports*', 'typings'], done);
    });

    gulp.task('Generate-TestResult', function () {
        let resultFile = 'cucumber-test-results.json';
        let reportLocation = 'reports/';


        return gulp.src(options.tmp + '/OAuth2API/' + resultFile)
            .pipe(replace('][', ','))
            .pipe(gulp.dest(options.tmp + '/OAuth2API/'))
            // .pipe(assignOwners())
            .pipe(reporter({
                dest: reportLocation
            }));
    });

    gulp.task('cucumber', function () {

        return gulp.src('OAuth2API/**/*.feature').pipe(cucumber(config)).on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        }).on('end', function () {

        });

    });

    gulp.task('run', gulpSequence('transpile-e2e', 'copytestdata-e2e', 'cucumber', 'Generate-TestResult'));
};
