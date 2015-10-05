'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './Modal.soy';

class Modal extends SoyComponent {
}
Modal.ELEMENT_CLASSES = 'modal';
ComponentRegistry.register('Modal', Modal);

export default Modal;
