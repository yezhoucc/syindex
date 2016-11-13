var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
	gulp.src('src/**/*.*')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist'));
});
// gulp.task('img', function() {
// 	gulp.src(['src/img/**/*.@(jpg|jpeg|ico|png|gif|svg)'])
// 		.pipe(gulp.dest('dist/img/'));
// });
// gulp.task("default",function () {
//     console.log('默认任务')
// })






// var gulp = require('gulp'),
//     preprocess = require('gulp-preprocess'),
//     htmlmin = require('gulp-htmlmin'),
//     cssmin = require('gulp-clean-css'),
//     jsmin = require('gulp-uglify'),
//     connect = require('gulp-connect');


// ////////////////////////////////////
// Scripts Tasks  //分配script路径
// ////////////////////////////////////

// gulp.task('scripts', function() {
//     //压缩业务代码
//     gulp.src(['src/ js/*.js'])
//         .pipe(jsmin({compress: false}))
//         .pipe(gulp.dest('dist/js/'));
//
//     gulp.src(['src/ js/lib/**/*.js'])
//         .pipe(gulp.dest('dist/js'));
// });



// ////////////////////////////////////
// Css Tasks		分配css路径
// ////////////////////////////////////
// gulp.task('css', function() {
//     gulp.src(['src/ css/**/*.css'])
//         .pipe(cssmin())
//         .pipe(gulp.dest('dist/css/'))
//
//     gulp.src(['src/ js/**/*.css'])
//         .pipe(cssmin())
//         .pipe(gulp.dest('dist/'))
// });


// ////////////////////////////////////
// HTML Tasks		分配html路径
// ////////////////////////////////////
// gulp.task('html', function() {
//     gulp.src(['src/html/**/*.html'])
//         .pipe(preprocess({context:{current:'什么鬼'}}))
//         .pipe(htmlmin({
//             removeComments: true,
//             removeCommentsFromCDATA: true,
//             collapseWhitespace: true,
//             collapseInlineTagWhitespace: false
//         }))
//         .pipe(gulp.dest('dist/html/'))
//         .pipe(connect.reload())
// });

// ////////////////////////////////////
// Image Tasks
// ////////////////////////////////////

gulp.task('image', function() {
    gulp.src(['src/ img/**/*.@(jpg|jpeg|ico|png|gif|svg)'])
        .pipe(gulp.dest('dist/img/'));

    // gulp.src(['src/ js/**/*.@(jpg|jpeg|ico|png|gif|svg)'])
    //     .pipe(gulp.dest('dist/js/'));
});


//  ////////////////////////////////////
//  Watch Tasks
//  ////////////////////////////////////

// gulp.task('watch', function() {
//     gulp.watch('src/ js/**/*.js', ['scripts']);
//     gulp.watch('src/ css/**/*.css', ['css']);
//     gulp.watch('src/ img/**/*.@(jpg|jpeg|ico|png|gif|svg)', ['image']);
//     gulp.watch('src/html/**/*.@(htm|html)', ['html']);
// });

// gulp.task('connect', function () {
//     connect.server();
// });

// ////////////////////////////////////
// Default Task
// ////////////////////////////////////
// gulp.task("watch",function () {
//     gulp.watch("src/**/*.*",["fileinclude"])
// })
gulp.task("watch",function () {
	gulp.watch('src/**/*.*',["fileinclude","image"])
})
gulp.task('default', [
    // 'scripts',
    // 'css',
    // 'html',
    // 'image',
    // 'watch',
    // 'connect'
    "fileinclude",
	"image"
])
// gulp.task("default",function () {
//     gulp.watch('src/*',["fileinclude"])
// })