import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    width: '450px',
    maxHeight: '500px',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
};

export default function ModalReact({ open, setOpen, children }) {
  Modal.setAppElement('html');

  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
      >
        {children}
      </Modal>
    </div>
  );
}
