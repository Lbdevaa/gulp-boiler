"use strict";

import gulp from "gulp";
const ftp = require('vinyl-ftp');
const ftpSettings = require('../tasks/ftpSettings');
const chalk = require('chalk');
const connect = ftp.create(ftpSettings);

module.exports = function deploy() {
  return src(['build/**/*.*', '!build/**/*.map'])
    .pipe(connect.newer('/test'))
    .pipe(connect.dest('/test'))
    .on('finish', () => console.log(`Finished deploing ./build to https://${chalk.blueBright(ftpSettings.host)} ${chalk.redBright(`OLD FILES NO CLEARED`)}`))

}
