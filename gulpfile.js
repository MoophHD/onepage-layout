const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

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

gulp.task(
    "default",
    gulp.series(["sass", "js", "html"], function (cb) {
        gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
        gulp.watch("src/js/**/*.js", gulp.series("js"));
        gulp.watch("src/index.html", gulp.series("html"));


        cb();
    })
);