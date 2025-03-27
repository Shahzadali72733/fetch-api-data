import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeartbeat, faBuilding, faCalculator, faPaintBrush, faTshirt, faLaptop, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";


// reusable box component

const JobCategoryCard = ({ icon, title, jobsAvailable }) => {
  return (
    <Card className="text-center p-4  m-auto card-compo" >
      <Card.Body>
        <div className="mb-3">
          <FontAwesomeIcon icon={icon} size="3x" />
        </div>
        <Card.Title  style={{cursor:"pointer"}} ><h6 className="text-primary">{title}</h6></Card.Title>
        <Card.Text>
         <p><strong className="text-primary avl-job">{jobsAvailable}</strong> Jobs Available </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const JobCategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  
  const icons = [
    faHome, faHeartbeat, faBuilding, faCalculator, faPaintBrush, faTshirt, faLaptop, faShippingFast
  ];

  useEffect(() => {
    fetch('https://remotive.com/api/remote-jobs')
      .then(response => response.json())
      .then(data => {
        const jobData = data.jobs.reduce((acc, job) => {
          const category = job.category;
          if (acc[category]) {
            acc[category]++;
          } else {
            acc[category] = 1;
          }
          return acc;
        }, {});
        
        const categoryList = Object.keys(jobData).map((category, index) => ({
          icon: icons[index % icons.length],  
          title: category,
          jobsAvailable: jobData[category]
        }));

        setCategories(categoryList);
      })
   
  }, []);

  return (
    <Container className="py-5 text-center">
      <div className="py-5">
        <h1 className="text-primary">Browse By Category</h1>
        <h6>You can locate the category in which your dream job can be found!</h6>
      </div>
      <Row className="g-4 ">
        {categories.map((category, index) => (
          <Col className="card-data" key={index} md={3} sm={6}>
            <JobCategoryCard {...category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobCategoriesSection;
