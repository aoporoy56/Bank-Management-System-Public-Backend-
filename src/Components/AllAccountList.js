import React, { useEffect, useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";

export default function AllAccountList() {
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState(); // [{}
  const [show, setShow] = useState(false);

  const handleShow = (account) => {
    setAccount(account);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    await fetch("http://localhost:4000/admin/delete/" + account.account_no, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setShow(false);
  };
  const handleActive = async () => {
    await fetch("http://localhost:4000/admin/active/" + account.account_no, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setShow(false);
  };
  const handleDeactive = async () => {
    await fetch(
      "http://localhost:4000/admin/deactivate/" + account.account_no,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setShow(false);
  };
  const getList = async () => {
    await fetch("http://localhost:4000/admin/allaccountlist")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setAccountList(data.data);
      });
  };
  useEffect(() => {
    getList();
  }, [show]);
  return (
    <div>
      <div className="container border mt-5 p-5">
        <h2>Personal Details</h2>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Account No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Image</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {accountList.map((account, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{account.account_no}</td>
                <td>{account.full_name}</td>
                <td>{account.image}</td>
                <td>
                  {account.status === "Active" ? (
                    <Badge bg="success">{account.status}</Badge>
                  ) : (
                    <Badge bg="danger">{account.status}</Badge>
                  )}
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(account)}>
                    Launch
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {account && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>ID:</strong>
                  </td>
                  <td>{account.id}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Account No:</strong>
                  </td>
                  <td>{account.account_no}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Full Name:</strong>
                  </td>
                  <td>{account.full_name}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address:</strong>
                  </td>
                  <td>{account.address}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Email:</strong>
                  </td>
                  <td>{account.email}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone:</strong>
                  </td>
                  <td>{account.phone}</td>
                </tr>
                <tr>
                  <td>
                    <strong>NID:</strong>
                  </td>
                  <td>{account.nid}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Gender:</strong>
                  </td>
                  <td>{account.gender}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Balance:</strong>
                  </td>
                  <td>{account.balance}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Image:</strong>
                  </td>
                  <td>{account.image}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Status:</strong>
                  </td>
                  <td>
                    {account.status === "Active" ? (
                      <Badge bg="success">{account.status}</Badge>
                    ) : (
                      <Badge bg="danger">{account.status}</Badge>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Created At:</strong>
                  </td>
                  <td>{account.created_at}</td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            {account.status === "Active" ? (
              <Button variant="warning" onClick={handleDeactive}>
                Deactivete
              </Button>
            ) : (
              <Button variant="success" onClick={handleActive}>
                Active
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
