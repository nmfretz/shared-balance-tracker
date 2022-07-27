import { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import { addOrder, editOrder } from "../lib/firebaseFunctions";

const OrderModal = ({ orderToEdit, setError }) => {
  const [show, setShow] = useState(false);

  const dateRef = useRef();
  const familyRef = useRef();
  const costRef = useRef();
  const descriptionRef = useRef();

  const [startDate, setStartDate] = useState(() => {
    return orderToEdit ? new Date(orderToEdit.data.date.seconds * 1000) : new Date();
  });

  // TODO: handle error in UI
  async function submitOrder(e) {
    e.preventDefault();

    if (orderToEdit) {
      try {
        await editOrder(
          orderToEdit.id,
          startDate,
          familyRef.current.value,
          costRef.current.value,
          descriptionRef.current.value
        );
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        handleClose();
      }
    } else {
      try {
        await addOrder(startDate, familyRef.current.value, costRef.current.value, descriptionRef.current.value);
      } catch (error) {
        setError(error);
      } finally {
        handleClose();
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {orderToEdit ? (
        <i className="bi bi-pencil-square" onClick={handleShow}></i>
      ) : (
        <Button className="custom-btn-color" variant="primary" onClick={handleShow}>
          <i className="bi bi-cart"></i>
          <span className="ps-2">Log Your Order</span>
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{orderToEdit ? "Edit Order" : "Log Order"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitOrder}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <DatePicker
                className="form-control"
                selected={startDate}
                ref={dateRef}
                onChange={(date) => setStartDate(date)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Family</Form.Label>

              <Form.Select
                aria-label="Default select example"
                ref={familyRef}
                defaultValue={orderToEdit ? orderToEdit.data.family : "Frong"}
                required
              >
                <option value="Frong">Frong</option>
                <option value="Fretz">Fretz</option>
                <option value="Frehnart">Frehnart</option>
                <option value="Sinclong">Sinclong</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                defaultValue={orderToEdit ? orderToEdit.data.cost : ""}
                ref={costRef}
                required
                placeholder=""
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                ref={descriptionRef}
                defaultValue={orderToEdit ? orderToEdit.data.description : ""}
                required
                placeholder=""
                autoComplete="off"
              />
            </Form.Group>

            <Button className="custom-btn-color" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
