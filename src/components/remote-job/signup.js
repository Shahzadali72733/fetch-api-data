import { Button, Form } from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";
const SignUp = () => {

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
            <h3 className="card-title text-center mb-4">SignUp</h3>
            
            <Form>
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

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <Button  className="w-100">
                Sign Up
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Login
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

export default SignUp;
