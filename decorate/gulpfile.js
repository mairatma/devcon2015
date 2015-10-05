'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'docs.css',
	bundleFileName: 'docs.js',
	globalName: 'devcon',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'devcon-docs'
});
