/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Modal.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Modal.
 */

if (typeof Templates.Modal == 'undefined') { Templates.Modal = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="modal component"><div class="modal-dialog"><div class="modal-content">' + Templates.Modal.header(opt_data, null, opt_ijData) + Templates.Modal.body(opt_data, null, opt_ijData) + Templates.Modal.footer(opt_data, null, opt_ijData) + '</div></div></div>');
};
if (goog.DEBUG) {
  Templates.Modal.content.soyTemplateName = 'Templates.Modal.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="modal-header"><h4>' + soy.$$escapeHtml(opt_data.header) + '</h4></section>');
};
if (goog.DEBUG) {
  Templates.Modal.header.soyTemplateName = 'Templates.Modal.header';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.body = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="modal-body">' + soy.$$escapeHtml(opt_data.body) + '</section>');
};
if (goog.DEBUG) {
  Templates.Modal.body.soyTemplateName = 'Templates.Modal.body';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.footer = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="modal-footer">';
  var buttonList26 = opt_data.footerButtons;
  var buttonListLen26 = buttonList26.length;
  for (var buttonIndex26 = 0; buttonIndex26 < buttonListLen26; buttonIndex26++) {
    var buttonData26 = buttonList26[buttonIndex26];
    output += '<button type="button" class="' + soy.$$escapeHtmlAttribute(buttonData26['class']) + '">' + soy.$$escapeHtml(buttonData26.label) + '</button>';
  }
  output += '</section>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Modal.footer.soyTemplateName = 'Templates.Modal.footer';
}

Templates.Modal.content.params = ["id"];
Templates.Modal.header.params = ["id","header"];
Templates.Modal.body.params = ["id","body"];
Templates.Modal.footer.params = ["id","footerButtons"];

class Modal extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'Modal');
  }
}
Modal.RENDERER = SoyRenderer;
Modal.setImpl(Modal);
SoyAop.registerTemplates('Modal');
export default Modal;
/* jshint ignore:end */
