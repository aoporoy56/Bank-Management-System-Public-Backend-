import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserState, navigate } from "../Context/UserProvider";
export default function CustomerLogin() {
  const [account_no, setAccountNo] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = UserState();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    if (password.length < 6) {
      alert("Password must be 6 digit long");
    } else {
      const data = {
        account_no : account_no,
        password: password,
      };
      await fetch("http://localhost:4000/customer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
          if (res.status === 200) {
            alert("Welcome " + res.data[0].full_name);
            setUser(res.data[0].account_no);
            localStorage.setItem("user", res.data[0].account_no);
            navigate("/customer");
          }else if (res.status === 400) {
            alert("Account is not active");
            navigate("/customer/login");
          } else {
            alert("Account No or Password is wrong");
          }
        })
        .catch((err) => {
          alert("Something wrong with server")
        });
    }
  };
  return (
    <div className="container">
      <Row className="d-flex justify-content-center">
        <div className="col-md-6 border mt-5 p-5">
          <h2 className="text-center">Customer Login</h2>
          <Form noValidate onSubmit={handleSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Control
                required
                type="number"
                placeholder="Account No"
                onChange={(e) => {
                  setAccountNo(e.target.value);
                }}
              />
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

            <Button type="submit">Login</Button>
            <p className="mt-3">
              Create a Account? <Link to={"/customer/register"}>Signup</Link>{" "}
            </p>
          </Form>
        </div>
      </Row>
    </div>
  );
}
