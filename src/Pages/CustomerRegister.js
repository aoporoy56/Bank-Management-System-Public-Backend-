import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CustomerRegister() {
  const [full_name, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nid, setNID] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("Image Link");
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(gender);
    if (full_name.length < 3) {
      alert("Enter Valid Name");
    } else if (address.length < 3) {
      alert("Enter Valid Address");
    } else if (email.length < 5) {
      alert("Enter Valid Email");
    } else if (nid.length != 10) {
      alert("Enter Valid NID");
    } else if (phone.length != 11) {
      alert("Phone number must be 11 digit long");
    } else if (gender === "") {
      alert("Select Gender");
    } else if (password.length < 6) {
      alert("Password must be 6 digit long");
    } else if (confirmPassword.length < 6) {
      alert("Confirm Password must be 6 digit long");
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password must be same");
    } else {
      const data = {
        full_name: full_name,
        address: address,
        email: email,
        gender: gender,
        phone: phone,
        nid: nid,
        password: password,
        image: image,
      };
      await fetch("http://localhost:4000/customer/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res)=> res.json())
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            alert(res.message);
            window.location.href = "/customer/login";
          } else {
            alert("Account Creation Failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <Row className="d-flex justify-content-center">
        <div className="col-md-6 border mt-5 p-5">
          <h2 className="text-center">Customer Sign Up</h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-4"
          >
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Control
                required
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Control
                required
                type="text"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Control
                required
                type="text"
                placeholder="NID"
                onChange={(e) => {
                  setNID(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value={""}>Gender</option>
                <option value="Male">Male</option>
                <option value="Feame">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFile">
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
            <p className="mt-3">
              Already have a Account? <Link to={"/customer/login"}>Login</Link>{" "}
            </p>
          </Form>
        </div>
      </Row>
    </div>
  );
}
