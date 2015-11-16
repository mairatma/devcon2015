'use strict';

import dom from 'bower:metal/src/dom/dom';
import DocsBase from './Docs.soy';
import 'bower:steel-tooltip/src/Tooltip';

class Docs extends DocsBase {
	handleTogglerClick_(event) {
		var container = event.delegateTarget.parentNode.querySelector('.docs-article-content');
		dom.toggleClasses(event.delegateTarget, 'icon-12-arrow-down-short icon-12-arrow-up-short');
		setTimeout(function() {
			dom.toggleClasses(container, 'expanded');
		}, 100);
		event.preventDefault();
		event.stopPropagation();
	}

	updateTooltipContent_(data, event) {
		event.target.content = event.target.alignElement.getAttribute('href');
	}
}
DocsBase.setImpl(Docs);

export default Docs;
