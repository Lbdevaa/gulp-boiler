"use strict";

import gulp from "gulp";
import ftp from "vinyl-ftp";
import chalk from "chalk";

const ftpSettings = require('../gulp-tasks/ftpSettings');
const connect = ftp.create(ftpSettings);

gulp.task("deploy", () => {
  return gulp.src(['dist/**/*.*', '!dist/**/*.map'])
    .pipe(connect.newer('/test'))
    .pipe(connect.dest('/test'))
    .on('finish', () => console.log(`${chalk.cyan(`Finished deploing./ dist`)} to https://${chalk.bgBlue(ftpSettings.host)} ${chalk.yellow(`OLD FILES NO CLEARED`)}`))
});