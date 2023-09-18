const { watch, parallel, series } = require("gulp");

module.exports = watching = () => {
  watch("src/**/*.html", parallel("html"));
  watch("src/**/*.scss", parallel("styles"));
  watch("src/**/*.js", parallel("jsDev"));
  watch("src/**/*.json", parallel("html"));
  watch("src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)", parallel("imgRaster"));
  watch("build/img/**/*.+(png|jpg|jpeg)", parallel("imgWebp"));
  watch("src/svg/css/**/*.svg", series("svgInCss", "styles"));
  watch("src/svg/sprite/**/*.svg", series("svgSprite", "imgRaster"));
  watch("src/fonts/**/*.ttf", series("ttfToWoff2", "fonts"));
};
