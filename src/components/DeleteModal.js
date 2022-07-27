import { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";

import { deleteOrder } from "../lib/firebaseFunctions";

const DeleteModal = ({ orderId, setError }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleDeleteOrder() {
    try {
      await deleteOrder(orderId);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  return (
    <>
      <i className="bi bi-trash" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <p>Are you sure you want to delete this order?</p>
            <Button className="custom-btn-color" onClick={handleDeleteOrder}>
              Delete
            </Button>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
