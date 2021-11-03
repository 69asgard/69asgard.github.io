const fs = require('fs')
const del = require('del')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('clean', async () => {
  del(['*.min.js', '!three.min.js'])
})

gulp.task('scripts', async () => {
  const sourceFiles = fs.readdirSync('src')
  sourceFiles.forEach(file => {
    const fileName = file.split('.')[0]
    return gulp.src([`src/${fileName}.js`, 'lib/*.js'])
      .pipe(concat(`${fileName}.min.js`))
      .pipe(uglify())
      .pipe(gulp.dest('./'))
  })
})

gulp.task('default', gulp.series('clean', 'scripts'))<script type="text&#x2F;javascript" src="https://cdn.jsdelivr.net/npm/kity@2.0.4/dist/kity.min.js"></script><script type="text&#x2F;javascript" src="https://cdn.jsdelivr.net/npm/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script><script defer="true" type="text&#x2F;javascript" src="https://cdn.jsdelivr.net/npm/hexo-simple-mindmap@0.7.0/dist/mindmap.min.js"></script><link rel="stylesheet" type="text&#x2F;css" href="https://cdn.jsdelivr.net/npm/hexo-simple-mindmap@0.7.0/dist/mindmap.min.css">