"use strict";

import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("server", () => {
    browsersync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000,
        notify: false,
        open: false
    });
    global.isWatching = true;
    gulp.watch("src/**/*.jade", gulp.parallel("views"));
    gulp.watch([
        "src/components/**/*.scss",
        "src/styles/**/*.scss",
        "src/vendors/**/*.css",
        "src/vendors/**/*.scss"
    ], gulp.parallel("style"/*, "styleConcat"*/));
    gulp.watch([
        "src/components/**/*.js",
        "src/scripts/**/*.js",
        "src/vendors/**/*.js"
    ], gulp.parallel("script"));
    gulp.watch([
        "src/img/**/*.*",
        "!src/img/icons/*.png",
        "!src/img/icons-svg/*.svg"
    ], gulp.parallel("image"));
    gulp.watch("src/img/icons/*.png", gulp.parallel("sprite"));
    gulp.watch("src/img/icons_blue/*.png", gulp.parallel("spriteBlue"));
    gulp.watch("src/img/icons_blackblue/*.png", gulp.parallel("spriteBlackBlue"));
    gulp.watch("src/img/icons_darkblue/*.png", gulp.parallel("spriteDarkBlue"));
    gulp.watch("src/img/icons_darkorange/*.png", gulp.parallel("spriteDarkOrange"));
    gulp.watch("src/img/icons_darkyellow/*.png", gulp.parallel("spriteDarkYellow"));
    gulp.watch("src/img/icons_green/*.png", gulp.parallel("spriteGreen"));
    gulp.watch("src/img/icons_lightblue/*.png", gulp.parallel("spriteLightBlue"));
    gulp.watch("src/img/icons_lightorange/*.png", gulp.parallel("spriteLightOrange"));
    gulp.watch("src/img/icons_lightred/*.png", gulp.parallel("spriteLightRed"));
    gulp.watch("src/img/icons_lightyellow/*.png", gulp.parallel("spriteLightYellow"));
    gulp.watch("src/img/icons_maroon/*.png", gulp.parallel("spriteMaroon"));
    gulp.watch("src/img/icons-svg/*.svg", gulp.parallel("spritesvg"));
    gulp.watch("src/img/favicon/*.*", gulp.parallel("favicon"));
    gulp.watch("src/fonts/**/*", gulp.parallel("fonts"));
});
