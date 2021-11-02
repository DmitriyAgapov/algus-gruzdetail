import gulp from "gulp";
import babel from "gulp-babel";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import cached from "gulp-cached";
import changed from "gulp-changed";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import debug from "gulp-debug";
import sourcemaps from "gulp-sourcemaps";

gulp.task("script", () => {
    gulp.src([
        "src/components/**/*_style1.js",
    ])
        .pipe(plumber({
            errorHandler: errorHandler("Ошибка в \'JS\' task")
        }))
        .pipe(cached("js"))
        .pipe(changed("dist/js/style1", {
            extension: ".js"
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false
                    }
                ]
            ]
        }))
        // .pipe(uglify())
        .pipe(rename({
            // suffix: ".min",
            dirname: "."
        }))
        .pipe(sourcemaps.write("./maps/"))
        .pipe(gulp.dest("dist/js/style1"))
        .pipe(debug({
            "title": "JS files"
        }));
    //
    // gulp.src([
    //     "src/components/**/*_style2.js",
    // ])
    //     .pipe(plumber({
    //         errorHandler: errorHandler("Ошибка в \'JS\' task")
    //     }))
    //     .pipe(cached("js"))
    //     .pipe(changed("dist/js/style2", {
    //         extension: ".js"
    //     }))
    //     .pipe(sourcemaps.init())
    //     .pipe(babel({
    //         presets: [
    //             [
    //                 "@babel/preset-env",
    //                 {
    //                     modules: false
    //                 }
    //             ]
    //         ]
    //     }))
    //     // .pipe(uglify())
    //     .pipe(rename({
    //         // suffix: ".min",
    //         dirname: "."
    //     }))
    //     .pipe(sourcemaps.write("./maps/"))
    //     .pipe(gulp.dest("dist/js/style2"))
    //     .pipe(debug({
    //         "title": "JS files"
    //     }));

    return gulp.src([
        "src/components/**/*_common.js",
        "src/scripts/**/*_common.js",
        "src/vendors/**/*_common.js",
    ])
        .pipe(plumber({
            errorHandler: errorHandler("Ошибка в \'JS\' task")
        }))
        .pipe(cached("js"))
        .pipe(changed("dist/js/common", {
            extension: ".js"
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false
                    }
                ]
            ]
        }))
        // .pipe(uglify())
        .pipe(rename({
            // suffix: ".min",
            dirname: "."
        }))
        .pipe(sourcemaps.write("./maps/"))
        .pipe(gulp.dest("dist/js/common"))
        .pipe(debug({
            "title": "JS files"
        }));
});
