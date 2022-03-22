"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});