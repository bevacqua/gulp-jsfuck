# `gulp-jsfuck`

> Fuck JavaScript and obfuscate it using only 6 characters ()+[]!

Uses [JSFuck](http://www.jsfuck.com/) to obfuscate your JavaScript code.

## Installing

```shell
npm i -D gulp-jsfuck
```

```js
var jsfuck = require('gulp-jsfuck');
```

## Usage

Just pipe through `jsfuck`

```js
gulp.src('path/to/src')
  .pipe(jsfuck())
  .pipe(gulp.dest('path/to/dest'))
```

## License

MIT
