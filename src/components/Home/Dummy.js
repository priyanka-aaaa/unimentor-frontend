import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';


function Dummy(props) {
  const [showModal, setshowModal] = useState(false);
  function open() {
    setshowModal(true)
  }
  function close() {
    setshowModal(false)
  }

  return (
    <div>
      <div>I am a Bootstrap Modal</div>
      <Button onClick={() => open()} >Show Modal</Button>
      <div>
        <Modal className="modal-container"
          show={showModal}
          onHide={() => close()}

          animation={true}
          bsSize="small">

          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One of fine body.........
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => close()}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Dummy;