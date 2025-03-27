import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";

const Login = ({ email, password}) => {
  return (
    <div>
      <div className="container-fluid" style={{ padding: "0", margin: "0" }}>
        <Header />
      </div>
      <div
        className="container d-flex justify-content-center align-items-center p-5"
        style={{ maxWidth: "500px" }}
      >
        <div className="card shadow-lg p-3" style={{ width: "100%" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>
            <Form >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <a href="/signup" className="text-decoration-none">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
