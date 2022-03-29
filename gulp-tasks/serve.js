"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        server: "./dist/",
        port: 3000,
        notify: true
    });

    gulp.watch(paths.views.watch, gulp.parallel("views"));
    gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
    gulp.watch(paths.libs.watch, gulp.parallel("libs"));
    gulp.watch(paths.spriteMono.watch, gulp.parallel("spriteMono"));
    gulp.watch(paths.spriteMulti.watch, gulp.parallel("spriteMulti"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
    gulp.watch(paths.docs.watch, gulp.parallel("docs"));
});