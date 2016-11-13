# gulp-file-include

* 安装gulp-content-include
* 使用 

    ` 
    var gulp = require('gulp');
    var contentInclude = require('gulp-content-includer');
    gulp.task('fileinclude', function() {
         gulp.src('src/**.html')
            .pipe(fileinclude({
              prefix: '@@',
              basepath: '@file'
            }))
        .pipe(gulp.dest('dist'));
    });
    `
* 新建公共文件header.html footer.html
* 新建layout.html,把公共样式引入
* 命令行执行 gulp fileinclude

 ##也可以使用ejs模板 npm install gulp-ejs
