const plugins = [];

const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const chalk = require("chalk");

module.exports = stylesLibs = (done) => {
  if (plugins.length > 0) {
    return src(plugins.length > 0)
      .pipe(map.init())
      .pipe(
        sass({
          outputStyle: "compressed",
        }).on("error", sass.logError)
      )
      .pipe(concat("libs.min.css"))
      .pipe(map.write("../sourcemaps/"))
      .pipe(dest("build/css/"));
  }

  return done(console.log(chalk.redBright("No added CSS/SCSS plugins")));
};
