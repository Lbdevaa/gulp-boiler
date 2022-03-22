"use strict";

import { paths } from "../gulpfile.babel";
const gulp = require('gulp');
const sprite = require('gulp-svg-sprite');
import browsersync from "browser-sync";

gulp.task("spriteMulti", () => {
  return gulp.src(paths.spriteMulti.src)
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../multi.svg',
          inline: true,
          example: true, // для градиентных html пример на img
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name']
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(paths.spriteMono.dist))
    .on("end", browsersync.reload);
});
