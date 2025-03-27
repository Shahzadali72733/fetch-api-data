import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import footerlogo from './assets/job-search-svgrepo-com (1).svg';
import facebook from './assets/facebook.svg';
import insta from './assets/insta.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';




const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 text-gray-700 bg-dark text-white pt-5">
      <div className="container-lg d-flex">
        <div className="col-4 p-4">
          <img src={footerlogo} alt="logo-footer" width="50px" />
          <p className="font-semibold">Job Hunt is the best platform to rewrite the story of your life. It all begins here!</p>
          <div className="flex space-x-3 mt-3 gap-3 d-flex">
          <img src={facebook} alt="logo-footer" width="20px" />
          <img src={insta} alt="logo-footer" width="20px" />
          <img src={twitter} alt="logo-footer" width="20px" />
          <img src={linkedin} alt="logo-footer" width="20px" />
          </div>
        </div>

        <div className="col-3 justify-content-end">
          <h5 className="font-semibold">Contact</h5>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Career</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">Support</a></li>
          </ul>
        </div>

        <div className="col-3">
          <h5 className="font-semibold">Pages</h5>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Career</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">Support</a></li>
          </ul>
        </div>

    <div className="col-3">
          <h5 className="font-semibold">Information</h5>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Press Kit</a></li>
            <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>
<hr/>
      <div className="mt-6 border-t  text-center text-sm">
        <p>&copy; 2023 Job Hunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
