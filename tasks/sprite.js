"use strict";

import gulp from "gulp";
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import spritesmith from 'gulp.spritesmith';
import buffer from 'vinyl-buffer';
import merge from 'merge-stream';
// import browsersync from "browser-sync";

var spritesPaths = {
    icons: {
        images: 'src/img/icons/*.png',
        imgName: 'sprite.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite.png',
        scss: 'src/styles/helpers'
    },
    iconsBlue: {
        images: 'src/img/icons_blue/*.png',
        imgName: 'sprite_blue.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_blue.png',
        scss: 'src/styles/helpers_blue'
    },
    iconsMaroon: {
        images: 'src/img/icons_maroon/*.png',
        imgName: 'sprite_maroon.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_maroon.png',
        scss: 'src/styles/helpers_maroon'
    },
    iconsGreen: {
        images: 'src/img/icons_green/*.png',
        imgName: 'sprite_green.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_green.png',
        scss: 'src/styles/helpers_green'
    },
    iconsLightYellow: {
        images: 'src/img/icons_lightyellow/*.png',
        imgName: 'sprite_lightyellow.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_lightyellow.png',
        scss: 'src/styles/helpers_lightyellow'
    },
    iconsLightRed: {
        images: 'src/img/icons_lightred/*.png',
        imgName: 'sprite_lightred.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_lightred.png',
        scss: 'src/styles/helpers_lightred'
    },
    iconsLightOrange: {
        images: 'src/img/icons_lightorange/*.png',
        imgName: 'sprite_lightorange.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_lightorange.png',
        scss: 'src/styles/helpers_lightorange'
    },
    iconsLightBlue: {
        images: 'src/img/icons_lightblue/*.png',
        imgName: 'sprite_lightblue.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_lightblue.png',
        scss: 'src/styles/helpers_lightblue'
    },
    iconsDarkYellow: {
        images: 'src/img/icons_darkyellow/*.png',
        imgName: 'sprite_darkyellow.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_darkyellow.png',
        scss: 'src/styles/helpers_darkyellow'
    },
    iconsDarkOrange: {
        images: 'src/img/icons_darkorange/*.png',
        imgName: 'sprite_darkorange.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_darkorange.png',
        scss: 'src/styles/helpers_darkorange'
    },
    iconsDarkBlue: {
        images: 'src/img/icons_darkblue/*.png',
        imgName: 'sprite_darkblue.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_darkblue.png',
        scss: 'src/styles/helpers_darkblue'
    },
    iconsBlackBlue: {
        images: 'src/img/icons_blackblue/*.png',
        imgName: 'sprite_blackblue.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite_blackblue.png',
        scss: 'src/styles/helpers_blackblue'
    },
}

gulp.task('sprite', function () {
  var spriteData = gulp.src(spritesPaths.icons.images).pipe(spritesmith({
    imgName: spritesPaths.icons.imgName,
    cssName: spritesPaths.icons.cssName,
    imgPath: spritesPaths.icons.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.icons.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteBlue', function () {
  var spriteData = gulp.src(spritesPaths.iconsBlue.images).pipe(spritesmith({
    imgName: spritesPaths.iconsBlue.imgName,
    cssName: spritesPaths.iconsBlue.cssName,
    imgPath: spritesPaths.iconsBlue.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsBlue.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteMaroon', function () {
  var spriteData = gulp.src(spritesPaths.iconsMaroon.images).pipe(spritesmith({
    imgName: spritesPaths.iconsMaroon.imgName,
    cssName: spritesPaths.iconsMaroon.cssName,
    imgPath: spritesPaths.iconsMaroon.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsMaroon.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteGreen', function () {
  var spriteData = gulp.src(spritesPaths.iconsGreen.images).pipe(spritesmith({
    imgName: spritesPaths.iconsGreen.imgName,
    cssName: spritesPaths.iconsGreen.cssName,
    imgPath: spritesPaths.iconsGreen.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsGreen.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteLightYellow', function () {
  var spriteData = gulp.src(spritesPaths.iconsLightYellow.images).pipe(spritesmith({
    imgName: spritesPaths.iconsLightYellow.imgName,
    cssName: spritesPaths.iconsLightYellow.cssName,
    imgPath: spritesPaths.iconsLightYellow.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsLightYellow.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteLightRed', function () {
  var spriteData = gulp.src(spritesPaths.iconsLightRed.images).pipe(spritesmith({
    imgName: spritesPaths.iconsLightRed.imgName,
    cssName: spritesPaths.iconsLightRed.cssName,
    imgPath: spritesPaths.iconsLightRed.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsLightRed.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteLightOrange', function () {
  var spriteData = gulp.src(spritesPaths.iconsLightOrange.images).pipe(spritesmith({
    imgName: spritesPaths.iconsLightOrange.imgName,
    cssName: spritesPaths.iconsLightOrange.cssName,
    imgPath: spritesPaths.iconsLightOrange.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsLightOrange.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteLightBlue', function () {
  var spriteData = gulp.src(spritesPaths.iconsLightBlue.images).pipe(spritesmith({
    imgName: spritesPaths.iconsLightBlue.imgName,
    cssName: spritesPaths.iconsLightBlue.cssName,
    imgPath: spritesPaths.iconsLightBlue.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsLightBlue.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteDarkYellow', function () {
  var spriteData = gulp.src(spritesPaths.iconsDarkYellow.images).pipe(spritesmith({
    imgName: spritesPaths.iconsDarkYellow.imgName,
    cssName: spritesPaths.iconsDarkYellow.cssName,
    imgPath: spritesPaths.iconsDarkYellow.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsDarkYellow.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteDarkOrange', function () {
  var spriteData = gulp.src(spritesPaths.iconsDarkOrange.images).pipe(spritesmith({
    imgName: spritesPaths.iconsDarkOrange.imgName,
    cssName: spritesPaths.iconsDarkOrange.cssName,
    imgPath: spritesPaths.iconsDarkOrange.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsDarkOrange.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteDarkBlue', function () {
  var spriteData = gulp.src(spritesPaths.iconsDarkBlue.images).pipe(spritesmith({
    imgName: spritesPaths.iconsDarkBlue.imgName,
    cssName: spritesPaths.iconsDarkBlue.cssName,
    imgPath: spritesPaths.iconsDarkBlue.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsDarkBlue.scss));
  return merge(imgStream, cssStream);
});

gulp.task('spriteBlackBlue', function () {
  var spriteData = gulp.src(spritesPaths.iconsBlackBlue.images).pipe(spritesmith({
    imgName: spritesPaths.iconsBlackBlue.imgName,
    cssName: spritesPaths.iconsBlackBlue.cssName,
    imgPath: spritesPaths.iconsBlackBlue.imgPath,
    padding: 10
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.iconsBlackBlue.scss));
  return merge(imgStream, cssStream);
});
