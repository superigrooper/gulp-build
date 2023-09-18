const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.styles = tasks.styles;
exports.stylesLibs = tasks.stylesLibs;
exports.jsBuild = tasks.jsBuild;
exports.jsLibs = tasks.jsLibs;
exports.jsDev = tasks.jsDev;
exports.html = tasks.html;
exports.imgRaster = tasks.imgRaster;
exports.imgWebp = tasks.imgWebp;
exports.svgInCss = tasks.svgInCss;
exports.svgSprite = tasks.svgSprite;
exports.ttfToWoff2 = tasks.ttfWoff2;
exports.fonts = tasks.fonts;
exports.browserSync = tasks.browserSync;
exports.watching = tasks.watching;

exports.default = gulp.parallel(
	exports.styles,
    exports.stylesLibs,
	exports.jsLibs,
    exports.jsDev,
    exports.html,
	exports.imgRaster,
    exports.imgWebp,
    exports.svgInCss,
    exports.svgSprite,
    exports.ttfToWoff2,
	exports.fonts,
    exports.browserSync,
    exports.watching,
)