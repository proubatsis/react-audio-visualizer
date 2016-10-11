var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task("webpack", function() {
    return gulp.src("app/**/*.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("output"));
});

gulp.task("html", function() {
    return gulp.src("*.html").pipe(gulp.dest("output"));
});

gulp.task("default", ["html", "webpack"]);
