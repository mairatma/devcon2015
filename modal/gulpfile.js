'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'modal.css',
	bundleFileName: 'modal.js',
	globalName: 'devcon',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'devcon-modal'
});
