"use strict";

import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import cached from "gulp-cached";
import changed from "gulp-changed";
import inheritance from "gulp-sass-inheritance";
import filter from "gulp-filter";
import sass from "gulp-sass";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import concat from "gulp-concat";
import debug from "gulp-debug";
// import browsersync from "browser-sync";
// import yargs from "yargs";

// const argv = yargs.argv,
//     production = !!argv.production;
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

gulp.task("style", () => {
    gulp.src([

        "src/components/**/*_style1.scss",
        "src/vendors/**/*_style1.scss",
        "src/styles/style1/**/*.scss",
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: errorHandler("Ошибка в \'Стилях\' task")
        }))
        .pipe(cached("sass"))
        .pipe(changed("dist/css/style1", {
            extension: ".css"
        }))
        .pipe(gulpIf(global.isWatching, inheritance({
            dir: "src"
        })))
        .pipe(filter(file => /src[\\\/]components/.test(file.path) || /src[\\\/]styles/.test(file.path) || /src[\\\/]vendors/.test(file.path) ))
        .pipe(sass())
        .pipe(postcss([
            require('postcss-import'),
            require('tailwindcss'),
            require('postcss-nested'),
            require('autoprefixer')
        ]))
        .pipe(groupmedia())
        // .pipe(autoprefixer({
        //     cascade: false,
        //     grid: true
        // }))
        // .pipe(mincss({
        //     compatibility: "ie8", level: {
        //         1: {
        //             specialComments: 0,
        //             removeWhitespace: true,
        //             semicolonAfterLastProperty: true
        //         },
        //         2: {
        //             mergeAdjacentRules: true,
        //             mergeMedia: true,
        //             removeEmpty: true,
        //             removeDuplicateFontRules: true,
        //             removeDuplicateMediaBlocks: true,
        //             removeDuplicateRules: true,
        //             removeUnusedAtRules: false
        //         }
        //     }
        // }))
        .pipe(rename({
            dirname: ".",
            // suffix: ".min"
        }))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write("./maps/"))
        .pipe(debug({
            "title": "CSS files"
        }))
        .pipe(gulp.dest("dist/css/style1"));

    // gulp.src([
    //     "src/components/**/*_style2.scss",
    //     "src/vendors/**/*_style2.scss",
    //     "src/styles/**/*_style2.scss",
    // ])
    //     .pipe(sourcemaps.init())
    //     .pipe(plumber({
    //         errorHandler: errorHandler("Ошибка в \'Стилях\' task")
    //     }))
    //     .pipe(cached("sass"))
    //     .pipe(changed("dist/css/style2", {
    //         extension: ".css"
    //     }))
    //     .pipe(gulpIf(global.isWatching, inheritance({
    //         dir: "src"
    //     })))
    //     .pipe(filter(file => /src[\\\/]components/.test(file.path) || /src[\\\/]styles/.test(file.path) || /src[\\\/]vendors/.test(file.path) ))
    //     .pipe(sass())
    //     .pipe(groupmedia())
    //     // .pipe(autoprefixer({
    //     //     cascade: false,
    //     //     grid: true
    //     // }))
    //     // .pipe(mincss({
    //     //     compatibility: "ie8", level: {
    //     //         1: {
    //     //             specialComments: 0,
    //     //             removeWhitespace: true,
    //     //             semicolonAfterLastProperty: true
    //     //         },
    //     //         2: {
    //     //             mergeAdjacentRules: true,
    //     //             mergeMedia: true,
    //     //             removeEmpty: true,
    //     //             removeDuplicateFontRules: true,
    //     //             removeDuplicateMediaBlocks: true,
    //     //             removeDuplicateRules: true,
    //     //             removeUnusedAtRules: false
    //     //         }
    //     //     }
    //     // }))
    //     .pipe(rename({
    //         dirname: ".",
    //         // suffix: ".min"
    //     }))
    //     .pipe(plumber.stop())
    //     .pipe(sourcemaps.write("./maps/"))
    //     .pipe(debug({
    //         "title": "CSS files"
    //     }))
    //     .pipe(gulp.dest("dist/css/style2"));
    //

    return gulp.src([
        "src/components/**/*_common.scss",
        "src/vendors/**/*_common.scss",
        "src/vendors/**/*_common.css",
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: errorHandler("Ошибка в \'Стилях\' task")
        }))
        .pipe(cached("sass"))
        .pipe(changed("dist/css/common", {
            extension: ".css"
        }))
        .pipe(gulpIf(global.isWatching, inheritance({
            dir: "src"
        })))
        .pipe(filter(file => /src[\\\/]components/.test(file.path) || /src[\\\/]styles/.test(file.path) || /src[\\\/]vendors/.test(file.path) ))
        .pipe(sass())
        .pipe(groupmedia())
        // .pipe(autoprefixer({
        //     cascade: false,
        //     grid: true
        // }))
        // .pipe(mincss({
        //     compatibility: "ie8", level: {
        //         1: {
        //             specialComments: 0,
        //             removeWhitespace: true,
        //             semicolonAfterLastProperty: true
        //         },
        //         2: {
        //             mergeAdjacentRules: true,
        //             mergeMedia: true,
        //             removeEmpty: true,
        //             removeDuplicateFontRules: true,
        //             removeDuplicateMediaBlocks: true,
        //             removeDuplicateRules: true,
        //             removeUnusedAtRules: false
        //         }
        //     }
        // }))
        .pipe(rename({
            dirname: ".",
            // suffix: ".min"
        }))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write("./maps/"))
        // .pipe(debug({
        //     "title": "CSS files"
        // }))
        .pipe(gulp.dest("dist/css/common"));

});
