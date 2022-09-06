import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditUser(props) {
  const [data, setData] = useState(props.props);

  // console.log(props.props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const editHandler = async (id) => {
    const body = { data };
    try {
      const editUser = await fetch(`http://localhost:8000/api/v1/put/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.data),
      });
      const gettingdata = editUser;
      alert(gettingdata.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>NAME</label>
            <input
              type="text"
              defaultValue={props.props.name}
              name="name"
              onChange={changeHandler}
            />
            <br />
            <label>email</label>
            <input
              type="email"
              defaultValue={props.props.email}
              name="email"
              onChange={changeHandler}
            />
            <br />
            <label>password</label>
            <input
              type="text"
              defaultValue={props.props.password}
              name="password"
              onChange={changeHandler}
            />
            <br />
            <Button
              variant="primary"
              onClick={() => {
                editHandler(props.props.id);
              }}
            >
              Edit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUser;
