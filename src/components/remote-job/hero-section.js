import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import banner1 from "./assets/banner1.jpg"; 
import banner2 from "./assets/banner2.png"; 
import banner3 from "./assets/banner3.webp"; 

function HeroSection() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={banner1} 
            alt="Job Hunt Logo"
            width="400" 
         height="550"
            className="d-block w-100" />
          <div className="carousel-caption d-none d-md-block ">
            <h1 className="m-5 fw-bold text-primary">Find Your Dream Job Today!</h1>
            <p>Explore thousands of job opportunities tailored to your skills and experience. Start your career journey with us!</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={banner2} 
            alt="Job Hunt Logo"
            width="400" 
            height="550"
            className="d-block w-100" />
          <div className="carousel-caption d-none d-md-block">
          <h1 className="m-5 fw-bold text-primary">Advance Your Career with the Right Opportunity!</h1>
            <p>Discover high-paying jobs, leadership roles, and career growth opportunities that align with your goals. Take the next step toward success today!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} 
            alt="Job Hunt Logo"
            width="400" 
             height="550"
             className="d-block w-100" />
          <div className="carousel-caption d-none d-md-block">
          <h1 className="m-5 fw-bold text-primary">Work from Anywhere, Anytime!</h1>
            <p>Explore remote job opportunities that fit your lifestyle and skills. Find flexible work options and achieve the work-life balance you deserve.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroSection;
