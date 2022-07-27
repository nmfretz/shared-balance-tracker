import { useState } from "react";
import { Modal } from "react-bootstrap";

import OrdersTable from "./OrdersTable";

const AllOrdersModal = ({ purchases, setError }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className="custom-see-all-orders" onClick={handleShow}>
        See all orders
      </p>

      <Modal className="" size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrdersTable purchases={purchases} displayAll={true} striped={true} setError={setError} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AllOrdersModal;
