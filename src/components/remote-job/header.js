import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./css/style-job-portal.css";
import logo from "./assets/job-search-svgrepo-com (1).svg"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handlehome = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const handleApply = () => {
    navigate('/apply');
  };
  const handlepostjob = () => {
    navigate('/post-job');
  };

  return (
    <Navbar expand="lg" className="shadow-sm bg-dark">
      <Container>
        <Navbar.Brand href="#" className="text-white" onClick={handlehome}>
          <img
            src={logo}
            alt="Job Hunt Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          /> Jobify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-5 p-2 m-auto">
            <Nav.Link href="#home" className="text-white" onClick={handlehome}>Home</Nav.Link>
            <Nav.Link  className="text-white">Find Jobs</Nav.Link>
            <Nav.Link  className="text-white" onClick={handlepostjob}>Post Jobs</Nav.Link>
            <Nav.Link  className="text-white" onClick={handleApply}>Apply</Nav.Link>
          </Nav>
          <div className="d-flex gap-3">
           
            <Button 
              variant="primary" className="rounded-0 pt-2"
              onClick={handleSignUpClick}
            >
              SignUp
            </Button>
            <Button 
              variant="outline-primary" 
              className="rounded-0 text-white" 
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 
