var gulp        = require("gulp");
var path        = require("path");
var ts          = require("gulp-typescript");
var sourcemaps  = require("gulp-sourcemaps");
var tslint      = require("gulp-tslint");
var del         = require('del');
var Builder     = require('systemjs-builder');

var scriptsPath = "Angular2/**/*.ts";
var cssPath = "Angular2/**/*.css";
var imagesPath = "Angular2/**/*.{jpg,gif,png,svg}";
var templatesPath = "Angular2/**/*.html";
var destPath = "wwwroot/";

gulp.task('clean', function () {
    return del([
        destPath + "app"
    ]);
});

gulp.task("typescript", function () {
    var tsProject = ts.createProject("tsconfig.json", {
        declarationFiles: true,
        noExternalResolve: true,
        isolatedModules: true
    });

    var tsResult =
            gulp.src(scriptsPath)
            .pipe(sourcemaps.init())
        	.pipe(ts(tsProject));

    tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destPath));
});

gulp.task("tslint", function() {
    gulp.src(scriptsPath)
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report( {
            emitError: false
        }));
});

gulp.task("css", function () {
	gulp.src(cssPath)
      .pipe(gulp.dest(destPath));
});

gulp.task("images", function () {
    gulp.src(imagesPath)
        .pipe(gulp.dest(destPath));
});

gulp.task("templates", function () {
    gulp.src(templatesPath)
        .pipe(gulp.dest(destPath));
});

gulp.task("fonts", function () {
    gulp.src("Angular2/app/shared/styles/fonts/*")
        .pipe(gulp.dest(destPath + "app/shared/styles/fonts/"));
});

gulp.task("static files", function () {
    gulp.src("Angular2/app/systemjs.config.js")
        .pipe(gulp.dest(destPath + "app/"));
    gulp.src("Angular2/app/index.html")
        .pipe(gulp.dest(destPath + "app/"));
});

gulp.task('bundle', function() {
    var builder = new Builder('/', 'wwwroot/app/systemjs.config.js');
    return Promise.all([
        builder.buildStatic('wwwroot/app/home/boot.js', 'wwwroot/app/home/bundle.js', {minify: false, sourceMaps: false}),
        builder.buildStatic('wwwroot/app/passwordReset/boot.js', 'wwwroot/app/passwordReset/bundle.js', {minify: false, sourceMaps: false}),
        builder.buildStatic('wwwroot/app/fassaden/boot.js', 'wwwroot/app/fassaden/bundle.js', {minify: false, sourceMaps: false}),
        builder.buildStatic('wwwroot/app/lamellen/boot.js', 'wwwroot/app/lamellen/bundle.js', {minify: false, sourceMaps: false})
    ])
        .then(function() {
            console.log("bundles complete");
        })
        .catch(function(err) {
            console.log("bundles build error");
            console.log(err);
        })
});

gulp.task("build", ['clean'], function() {
    gulp.start("static files");
    gulp.start("css");
    gulp.start("typescript");
    gulp.start("templates");
    gulp.start("images");
    gulp.start("fonts");
    gulp.start("default");
});

gulp.task("watch", ['clean', 'build'], function () {
    gulp.watch(cssPath, ["css"]);
    gulp.watch(scriptsPath, ["typescript", "tslint"]);
    gulp.watch(templatesPath, ["templates"]);
    gulp.watch(imagesPath, ["images"]);
});

gulp.task("default", function () {
    gulp.src("./node_modules/bootstrap/dist/css/bootstrap.css")
        .pipe(gulp.dest(destPath + "css/"));
	gulp.src("./node_modules/bootstrap/dist/js/bootstrap.js")
        .pipe(gulp.dest(destPath + "js/"));
});