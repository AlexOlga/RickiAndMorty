import React, { Component } from 'react';
import { ICharacter } from 'types';
import './modal.css';
type ModalProps = {
  isOpen: boolean;
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  data: ICharacter;
};

class Modal extends Component<ModalProps> {
  render() {
    const { isOpen, onCancel } = this.props;
    return (
      <>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-header">
                <button name="times" onClick={onCancel}>
                  X
                </button>
              </div>
              <div className="modal-body">тут будет текст</div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Modal;
