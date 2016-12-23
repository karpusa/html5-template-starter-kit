# html5-template-starter-kit
HTML5 responsive template starter kit. Usefull for fast development HTML pages. Fast & easy start with example page.

## Starter kit include
* Less - CSS pre-processor, bonus folders structure with Media Queries breakpoints with support responsive
* Autoprefixer - Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
* Normalize.css - Modern, HTML5 CSS reset
* jQuery - Default include
* Nunjucks - Templating engine
* gulp-imagemin - Minify PNG, JPEG, GIF and SVG images with imagemin
* gulp-minify - UglifyJS 2 is a JavaScript parser, minifier, compressor or beautifier toolkit.
* Browsersync - Time-saving synchronised browser testing

## Folder structure

    ├── app               # source
    │   ├── i             # images
    │   ├── js            # JavaScript files
    │   ├── less          # less files
    │   └── template      # template with nunjucks
    └── dist              # build folder

## Quickstart

Install [Node.js](https://nodejs.org/en/).

First run

```bash
npm start          # install nodejs and bower dependencies, running browserSync on http://localhost:3000/ and watch files changes.
```

Other commands

```bash
npm run serve      # Only watch change files
```

```bash
npm run build      # Only build files
```

## License

MIT

## Author

[Vitalijs Karpusa](http://www.karpusa.lv)
