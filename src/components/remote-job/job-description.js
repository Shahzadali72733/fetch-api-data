import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export const JobDescription = () => {
  const { id } = useParams(); 
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        console.log("Job ID from URL:", id); 

        const response = await fetch("https://remotive.com/api/remote-jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        console.log("API Response:", data); 

        const selectedJob = data.jobs.find((job) => job.id === parseInt(id));
        console.log("Selected Job:", selectedJob); 
        if (selectedJob) {
          setJob(selectedJob); 
        } else {
          throw new Error("Job not found");
        }
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>No job found</div>;
  }

  console.log("Job State:", job);
  return (
    <>
      <Header />
      <div className="banner-apply d-flex justify-content-center p-5">
        <button style={{fontSize:"20px", borderRadius:"50px", border:"2px solid #0b5ed7", margin:"100px 0"}}>Apply Now</button>
      </div>

      <div className="d-flex boxes-des container-lg justify-content-between text-center">
          <div className="bg-light  border rounded flex align-content-center" style={{width:"250px", height:"100px", alignItems:"center"}}>
          <h3>Job Category</h3>
          <p>{job.category}</p>
          </div>
          <div className="bg-light  border rounded flex align-content-center" style={{width:"250px", height:"100px", alignItems:"center"}}>
           <h3>Job Type</h3>
          <p>{job.job_type}</p>
          </div>
          <div className="bg-light  border rounded flex align-content-center" style={{width:"250px", height:"100px", alignItems:"center"}}>       
          <h3>Work Type</h3>
          <p>{job.publication_date}</p>
          </div>
          <div className="bg-light  border rounded flex align-content-center" style={{width:"250px", height:"100px", alignItems:"center"}}>      
          <h3>Salary</h3>
          <p>{job.salary}</p>
          </div>
      </div>

      <div className="container-fluid  pt-5">
        <div className="job-description container">
        <h1>{job.title}</h1>
        <p className="text-muted">{job.company_name}</p>
        <p>
          <strong>Location:</strong> {job.candidate_required_location}
        </p>
        <p>
          <strong>Category:</strong> {job.category}
        </p>
        <p>
          <strong>Job Type:</strong> {job.job_type}
        </p>
        <div>
          <strong>Description:</strong>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Apply Now
        </a>
      </div>
      </div>
      <Footer />
    </>
  );
};