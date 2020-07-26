var config = {
    server: {
        baseDir: './app/'
    },
    // tunnel: true,
    host: 'localhost',
    open: 'external',
    port: 3000,
    logPrefix: "server"
};

var gulp     = require('gulp'),          // Подключаем Gulp
	cssmin   = require('gulp-cssmin');   // Минифицирование CSS
	rename   = require('gulp-rename');   // Смена названиея
	size     = require('gulp-size');     // Показываем размер файла в консоли
	debug    = require('gulp-debug');	 // Отоброжение своего текста в консоли
    watch    = require('gulp-watch');    // Слежеие за файлами
    imagemin = require('gulp-imagemin'); // Сжатия PNG, JPEG, GIF и SVG изображений
    sass     = require('gulp-sass'),     // Модуль для компиляции SASS (SCSS) в CSS
    del      = require('del');           // Удаление файлов и папок
    browserSync  = require("browser-sync").create(); // Авто-обновление сттаницы браузера
    autoprefixer = require('gulp-autoprefixer');     // Авто-добавление префиксов

gulp.task('min-css', function(done) {
    gulp.src('app/assets/css/main.css')
    	.pipe(debug({title: 'БЫЛО'}))
    	.pipe(size())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(debug({title: 'СТАЛО'}))
        .pipe(size())
        .pipe(rename({suffix: '.min' }))
        .pipe(gulp.dest('build/css'));
          console.log("HTTP Server Started");
  		done();
});

gulp.task('sass-css', () => // Преобразование SASS в CSS
    gulp.src('app/assets/css/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
);

gulp.task('min-img', () =>
    gulp.src('app/assets/img/*')
        //.pipe(gulp.dest('old/images')) // Длеаем страную копию на всякий случай
        .pipe(size())
        .pipe(imagemin())
        .pipe(size())
        .pipe(gulp.dest('build/img')) // Создаем уже для сжатых изображений папку 
);

gulp.task('min-icons', () =>
    gulp.src('app/assets/icons/**/*.*') // Берем все изображения из папки
        .pipe(size())
        .pipe(imagemin())
        .pipe(size())
        .pipe(gulp.dest('build/icon')) // Создаем уже для сжатых изображений папку 
);

gulp.task('clean', function(done) {
    del.sync('build');
    done();
});

gulp.task('start', function(done) { // таск для вызова browserSync
    browserSync.init(config);
    done();
});

gulp.task('html-watch', function(done) {
    gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true })); // перезагрузим сервер
    done();
});

gulp.task('js-watch', function(done) {
    gulp.src('app/assets/js/*.js')
        .pipe(browserSync.reload({ stream: true })); // перезагрузим сервер
    done();
});

gulp.task('сss-watch', function(done) {
    gulp.src('app/assets/css/main.css')
        .pipe(browserSync.reload({ stream: true })); // перезагрузим сервер
    done();
});

gulp.task('sass-watch', function(done) {
    gulp.src('app/assets/css/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({ stream: true })); // перезагрузим сервер
    done();
});

gulp.task('watch', function() {
    gulp.watch('app/*.html', gulp.series('html-watch'));
    gulp.watch('app/assets/css/main.css', gulp.series('сss-watch'));
    gulp.watch('app/assets/js/*.js', gulp.series('js-watch'));
});

// Начать работу проекта
gulp.task('start-work', gulp.parallel('start', 'watch'));

// Закончить работу проекта
gulp.task('end-work', gulp.series('min-css', 'min-img', 'min-icons'));