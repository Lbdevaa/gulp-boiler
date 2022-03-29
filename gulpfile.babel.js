"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/*.html",
                "./src/views/pages/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/css/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/*.{jpg,jpeg,png,gif,tiff,svg,ico,webp}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,ico,webp}"
        },
        spriteMono: {
            src: "./src/img/sprites/mono/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/sprites/mono/*.svg"
        },
        spriteMulti: {
            src: "./src/img/sprites/multi/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/sprites/multi/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*"
        },
        libs: {
            src: "./src/libs/**/*",
            dist: "./dist/libs/",
            watch: "./src/libs/**/*"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: [
                "./src/.htaccess",
                "./src/manifest.json",
            ],
            dist: "./dist/"
        },
        docs: {
            src: "./src/docs/**/*",
            dist: "./dist/docs/",
            watch: "./src/docs/**/*"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "spriteMono", "spriteMulti", "fonts", "libs", "favicons", "docs"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "spriteMono", "spriteMulti", "fonts", "libs", "favicons", "gzip", "docs"]));

export const ftp = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "spriteMono", "spriteMulti", "fonts", "libs", "favicons", "gzip", "docs"]),
    gulp.parallel("deploy"));

export default development;