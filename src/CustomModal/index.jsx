import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CustomModal(props) {
  const { show, handleClose } = props;

  return (
    <Modal show={props.show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        {props.footer}
  <Button className="btn btn-primary btn-sm" onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CustomModal;