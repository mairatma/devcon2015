/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Docs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Docs.
 */

if (typeof Templates.Docs == 'undefined') { Templates.Docs = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Docs.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component"><header class="header"><div class="container"><div class="header-bg"></div><nav class="topbar"><a class="topbar-logo" href="/"><img class="topbar-logo-image" src="./images/logo_signature.png" alt="Metal.js Logo" width="35" height="28"><h1 class="topbar-logo-text">Metal.js</h1></a><ul class="topbar-menu"><li class="topbar-menu-item"><a class="topbar-menu-link" href="/docs/">Documentation</a></li><li class="topbar-menu-item"><a class="rounded-icon topbar-icon-github" target="_blank" href="https://github.com/metal/metal.js"><img src="./images/github_icon.svg" alt="GitHub Icon" width="16"></a></li></ul></nav></div></header><main class="docs"><div class="container"><div class="row"><nav class="docs-nav col-md-3"><p class="docs-nav-group">Intro</p><ul class="docs-nav-list"><li class="docs-nav-item"><a href="/docs/" class="docs-nav-link">Creating your own component</a></li><li class="docs-nav-item"><a href="/docs/building.html" class="docs-nav-link">Transpiling and building your component</a></li><li class="docs-nav-item"><a href="/docs/testing.html" class="docs-nav-link">Testing your component</a></li><li class="docs-nav-item"><a href="/docs/importing.html" class="docs-nav-link">Importing a third party component</a></li></ul><p class="docs-nav-group">Guides</p><ul class="docs-nav-list"><li class="docs-nav-item"><a href="/docs/alias.html" class="docs-nav-link">Alias</a></li><li class="docs-nav-item"><a href="/docs/attributes.html" class="docs-nav-link">Attributes</a></li><li class="docs-nav-item"><a href="/docs/soy-components.html" class="docs-nav-link">Soy Components</a></li><li class="docs-nav-item"><a href="/docs/component-lifecycle.html" class="docs-nav-link">Component Lifecycle</a></li><li class="docs-nav-item"><a href="/docs/nested-components.html" class="docs-nav-link">Nested Components</a></li><li class="docs-nav-item"><a href="/docs/overwriting-template-elements.html" class="docs-nav-link">Overwriting Template Elements</a></li><li class="docs-nav-item"><a href="/docs/inline-events.html" class="docs-nav-link">Inline Events</a></li><li class="docs-nav-item"><a href="/docs/decorate.html" class="docs-nav-link">Decorate</a></li><li class="docs-nav-item"><a href="/docs/performance.html" class="docs-nav-link">Performance</a></li></ul></nav><article class="docs-content col-md-6 col-md-offset-1"><div class="docs-article noselect"><h1 class="docs-article-header">Creating your own component</h1><span data-onclick="handleTogglerClick_" class="docs-article-header-toggler icon-12-arrow-down-short"></span><div class="docs-article-content expanded"><p>There are many different ways to create a new component using Metal.js. You can use<strong>SoyComponent</strong>, or extend directly from<strong>Component</strong>, or even build your own component abstraction on top of those and use it instead. You can build the ES6 code using babel, traceur or any other transpiler. You can test using karma, jasmine or any other test framework, and can use any directory structure for your project. To sum it up, you can customize everything to your own needs. The world is your oyster.</p><p>This guide will focus on a quick and easy way to get started with Metal.js, using<strong class="strong-after">SoyComponent</strong>as the component base class and<strong class="strong-after">generator-metal</strong>for the project structure and workflow.</p><div class="docs-article"><h2 class="docs-article-header">Dependencies</h2><span data-onclick="handleTogglerClick_" class="docs-article-header-toggler icon-12-arrow-down-short"></span><div class="docs-article-content expanded"><ul><li>For importing the source code you\'ll need<a href="http://bower.io/">Bower</a></li><li>For build tooling, you\'ll need<a href="https://nodejs.org/download/">Node.js</a>v0.10 or newer.</li><li>For Soy templates compilation, you\'ll need Java SDK v1.7 or newer.</li></ul></div></div><div class="docs-article"><h2 class="docs-article-header">Creating the project structure</h2><span data-onclick="handleTogglerClick_" class="docs-article-header-toggler icon-12-arrow-down-short"></span><div class="docs-article-content expanded"><p>We\'ve built a<a href="https://www.npmjs.com/package/generator-metal">Yeoman generator</a>for creating the initial project structure together with some useful dependencies. To use it:</p><ol><li>Install Yeoman and<strong>generator-metal</strong>:<br><code>[sudo] npm i -g yo generator-metal</code></li><li>Open the folder that you want to use on your terminal and type:<br><code>yo metal</code></li><li>Answer the generator prompts</li><li>Wait for the generator to finish fetching dependencies</li></ol></div></div></div></div></article></div></div></main><footer class="footer"><div class="container"><p class="footer-paragraph"><span class="footer-credits"><a class="rounded-icon footer-icon-liferay" target="_blank" href="http://liferay.com/"><img src="./images/liferay_logo.svg" alt="Liferay Icon" width="19" height="19"></a>Brought to you by<a class="footer-link" target="_blank" href="http://liferay.com/">Liferay, Inc</a></span><span class="footer-license"><a class="footer-link" target="_blank" href="https://github.com/metal/metal.js/blob/master/LICENSE.md">BSD</a>License.</span></p></div></footer>' + soy.$$escapeHtml(Templates.Tooltip.content({id: opt_data.id + '-tooltip', elementClasses: 'fade', events: {alignElementChanged: opt_data.id + ':updateTooltipContent_'}, selector: '.docs-article a', visible: false}, null, opt_ijData)) + '</div>');
};
if (goog.DEBUG) {
  Templates.Docs.content.soyTemplateName = 'Templates.Docs.content';
}

Templates.Docs.content.params = ["id"];

class Docs extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'Docs');
  }
}
Docs.RENDERER = SoyRenderer;
Docs.setImpl(Docs);
SoyAop.registerTemplates('Docs');
export default Docs;
/* jshint ignore:end */
