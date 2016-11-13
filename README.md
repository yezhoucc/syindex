# gulp-file-include
* 安装node
* 全局安装gulp
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
* 命令行执行 gulp

 ##也可以使用ejs模板 npm install gulp-ejs
 ##问题一:从src到dist目录下图片发生问题，所有图片都不能显示
 ##问题二：页面跳转太多，有非常多的公共页面，全部都单独写页面不太合适
