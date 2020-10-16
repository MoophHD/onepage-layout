const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const imagemin = require('gulp-imagemin')

gulp.task("sass", () => {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("js", () => {
    return gulp
        .src("src/js/**/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("html", () => {
    return gulp
        .src("src/index.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task("img", () => {
    return gulp
        .src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task("fonts", () => {
    return gulp
        .src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task(
    "default",
    gulp.series(["sass", "js", "html", "img", "fonts"], function (cb) {
        gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
        gulp.watch("src/js/**/*.js", gulp.series("js"));
        gulp.watch("src/index.html", gulp.series("html"));
        gulp.watch("src/img/*", gulp.series("img"));
        gulp.watch("src/fonts/*", gulp.series("fonts"));

        cb();
    })
);