import React, { Component } from 'react';
import { ICharacter } from 'types';
import './modal.css';
type ModalProps = {
  isOpen: boolean;
  onCancel: (e: React.MouseEvent) => void;
  data: ICharacter;
};

class Modal extends Component<ModalProps> {
  render() {
    const { isOpen, onCancel, data } = this.props;
    if (isOpen) {
      document.body.classList.add('scroll');
    } else {
      document.body.classList.remove('scroll');
    }
    return (
      <>
        {isOpen && (
          <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-window">
              <div className="modal-header">
                <h3 className="character_name">{data.name}</h3>
                <button name="close" onClick={onCancel} className="button-close">
                  X
                </button>
              </div>
              <div className="modal-body">
                <img className="character_img" src={data.image} alt="Character image" />
                <div className="text-contener">
                  <p>
                    <span className="character_category">Status: </span> {data.status}
                  </p>
                  <p>
                    <span className="character_category">Species: </span>
                    {data.species}
                  </p>
                  <p>
                    <span className="character_category">Last known location: </span>
                    {data.location?.name}
                  </p>
                  <p>
                    <span className="character_category">First seen in: </span>
                    {data.origin?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Modal;
