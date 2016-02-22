/// <reference path="bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js" />
/// <reference path="bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js" />
var gulp = require('gulp'),
    gulpConcat = require("gulp-concat"),
    gulpRename = require("gulp-rename"),
    gulpUglify = require("gulp-uglify"),
    gulpUglifyCss = require("gulp-uglifycss"),
    sass = require('gulp-ruby-sass'),
    autoprefix = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    bower = require('gulp-bower');

var config = {
    bowerDir: './bower_components',
    scriptsDir: './scripts',
    componentsDir: './scripts/components',
    nodeDir:'./node_modules'
}

//gulp bower is a task that installs all bower components to to 'bowerDir'
gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

//minify all 3rd party JS loibraries
gulp.task('libs-js', function () {
    return gulp.src([config.bowerDir + "/jquery/dist/jquery.min.js",
      config.bowerDir + "/bootstrap-sass/assets/javascripts/bootstrap.min.js"])
        .pipe(gulpConcat("libs.min.js"))
        .pipe(gulpUglify())
        .pipe(gulp.dest('./scripts'))
});

gulp.task('application-js', function () {
    return gulp.src([config.nodeDir + "/react/dist/react-with-addons.js",
      config.nodeDir + "/react-dom/dist/react-dom.js",
      config.nodeDir + "/director/build/director.js",
      "static-content/blogs.js",
      config.scriptsDir + "/utils.js",
      config.scriptsDir + "/models/index.js",
      config.componentsDir + "/*.js",
      config.scriptsDir + "/app.js"])
        .pipe(gulpConcat("application.min.js"))
        .pipe(gulpUglify())
        .pipe(gulp.dest('./scripts'))
});

//compile bootstrap SASS
gulp.task("bootstrap-sass", function () {
    return sass("./styles/sass/site.scss")
    .on("error", sass.logError)
    .pipe(gulp.dest("./styles/css"))
});

gulp.task("css", function () {
    return gulp.src("./styles/**/*.css")
.pipe(gulpConcat("partisan.min.css"))
    .pipe(gulpUglifyCss())
    .pipe(gulp.dest("./styles/css"))
})

// Rerun the task when a file changes
//gulp.task('watch', function () {
//    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
//});

//gulp.task('default', ['bower', 'icons', 'css']);
