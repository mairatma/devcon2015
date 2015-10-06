'use strict';

import dom from 'bower:metal/src/dom/dom';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import Tooltip from 'bower:steel-tooltip/src/Tooltip';
import './Docs.soy';

class Docs extends SoyComponent {
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
ComponentRegistry.register('Docs', Docs);

export default Docs;
