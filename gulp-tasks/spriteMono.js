"use strict";

import { paths } from "../gulpfile.babel";
const gulp = require('gulp');
const sprite = require('gulp-svg-sprite');
import browsersync from "browser-sync";

gulp.task("spriteMono", () => {
  return gulp.src(paths.spriteMono.src)
    .pipe(sprite({
      mode: {
        symbol: {
          sprite: '../mono.svg',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name', 'fill', 'stroke.*']
                  },
                },
              ],
            },
          },
        ],
      }
    }))
    .pipe(gulp.dest(paths.spriteMono.dist))
    .on("end", browsersync.reload);
});

