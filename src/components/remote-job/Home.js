import React from "react";
import Header from "../remote-job/header";
import JobCategoriesSection from '../remote-job/search-by-category';
import HeroSection from "../remote-job/hero-section";
import Footer from "../remote-job/footer";
import JobListing from "../remote-job/job-list";



const Home = () => {
    return (
      <>
      <Header />
      <HeroSection />
      <JobCategoriesSection />
      <JobListing />
      <Footer />
       </>
    );
  }
  
  export default Home;